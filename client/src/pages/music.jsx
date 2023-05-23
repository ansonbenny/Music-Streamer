import React, { Fragment, useEffect, useState } from "react";
import { Banner, LibraryModal, Row } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/additional";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { setLibraryModal } from "../redux/library";
import { setAuth } from "../redux/auth";
import axios from "axios";
import instance from "../lib/axios";

const Music = () => {
  const location = useLocation();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { id } = useParams();

  const { library, user } = useSelector((state) => state);

  const [response, setResponse] = useState({});

  const libraryAction = () => {
    if (user) {
      dispatch(setLibraryModal({ status: true, track: response?.track?.id }));
    } else {
      dispatch(setAuth({ login: true }));
    }
  };

  const getTrackData = async (cancelToken) => {
    let res;
    try {
      res = await instance.get("/music/track", {
        params: {
          id,
        },
        cancelToken: cancelToken?.token || null,
      });
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log("Cancelled");
      } else if (typeof err?.response?.data?.message === "string") {
        alert(err?.response?.data?.message);
        navigate("/");
      } else {
        alert("Facing An Error");
        navigate("/");
      }
    } finally {
      if (res?.data) {
        setResponse(res?.data?.data);
        setTimeout(() => {
          dispatch(setLoading(false));
        }, 1000);
      }
    }
  };

  const LibFormAction = async (playlistId, checked, search, reloadData) => {
    if (checked) {
      let res;

      try {
        res = await instance.put("/music/add-track-playlist", {
          playlistId,
          trackId: response?.track?.id,
        });
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Cancelled");
        } else if (err?.response?.data?.status === 405) {
          dispatch(setUser(null));
          dispatch(setLibraryModal({ status: false }));
        } else {
          alert("Facing An Error");
        }
      } finally {
        if (res?.data) {
          getTrackData();
          reloadData(search?.value);
        }
      }
    } else {
      let res;

      try {
        res = await instance.put("/music/remove-track-playlist", {
          playlistId,
          trackId: response?.track?.id,
        });
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Cancelled");
        } else if (err?.response?.data?.status === 405) {
          dispatch(setUser(null));
          dispatch(setLibraryModal({ status: false }));
        } else {
          alert("Facing An Error");
        }
      } finally {
        if (res?.data) {
          getTrackData();
          reloadData(search?.value);
        }
      }
    }
  };

  useEffect(() => {
    document.title = `Musicon`;

    const cancelToken = axios.CancelToken.source();

    getTrackData(cancelToken);

    return () => {
      cancelToken?.cancel?.();
    };
  }, [location]);
  return (
    <Fragment>
      <div className="container">
        {response?.track && (
          <Banner
            data={response?.track}
            libraryAction={libraryAction}
            inLibrary={response?.inPlaylist}
          />
        )}

        {response?.tracks?.[0] && (
          <Row
            title={`Popular by ${response?.track?.artists?.[0]?.name}`}
            data={response?.tracks}
          />
        )}
      </div>
      {library?.modal?.status && <LibraryModal formAction={LibFormAction} />}
    </Fragment>
  );
};

export default Music;
