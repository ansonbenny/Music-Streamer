import React, { useEffect, useState } from "react";
import {
  Banner,
  Collections as CollectionsComp,
  LibraryModal,
  LoadMore,
} from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/additional";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { setAuth } from "../redux/auth";
import { setLibraryModal } from "../redux/library";
import { setUser } from "../redux/user";
import axios from "axios";
import instance from "../lib/axios";

const Collections = ({ isArtist }) => {
  const location = useLocation();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { id } = useParams();

  const { user, library } = useSelector((state) => state);

  const [response, setResponse] = useState();

  const libraryAction = async () => {
    let res;
    try {
      res = await instance.delete("/music/delete-playlist", {
        data: {
          id,
          type: "playlist",
        },
      });
    } catch (err) {
      if (err?.response?.data?.status === 405) {
        dispatch(setAuth({ login: true }));
        navigate("/");
      } else {
        alert("Error");
      }
    } finally {
      if (res?.data) {
        navigate("/");
      }
    }
  };

  const LibFormAction = async (playlistId, checked, search, reloadData) => {
    if (checked) {
      let res;

      try {
        res = await instance.put("/music/add-track-playlist", {
          playlistId,
          trackId: library?.modal?.track,
        });
      } catch (err) {
        if (err?.response?.data?.status === 405) {
          dispatch(setUser(null));
          dispatch(setLibraryModal({ status: false }));
          navigate("/");
        } else {
          alert("Facing An Error");
        }
      } finally {
        if (res?.data) {
          getTracks(true);
          reloadData(search?.value);
        }
      }
    } else {
      let res;

      try {
        res = await instance.put("/music/remove-track-playlist", {
          playlistId,
          trackId: library?.modal?.track,
        });
      } catch (err) {
        if (err?.response?.data?.status === 405) {
          dispatch(setUser(null));
          dispatch(setLibraryModal({ status: false }));
          navigate("/");
        } else {
          alert("Facing An Error");
        }
      } finally {
        if (res?.data) {
          getTracks(true);
          reloadData(search?.value);
        }
      }
    }
  };

  const getTracks = async (reload) => {
    let res;
    try {
      res = await instance.get("/music/user-playlist-tracks", {
        params: {
          id,
          offset: reload ? 0 : response?.offset + 10,
        },
      });
    } catch (err) {
      if (err?.response?.data?.status === 405) {
        alert("Not Logged");
        dispatch(setUser(null));
        navigate("/");
      } else if (typeof err?.response?.data?.message === "string") {
        alert(err?.response?.data?.message);
      } else {
        alert("Something Wrong");
      }
    } finally {
      if (res?.data) {
        if (reload) {
          setResponse((state) => ({
            ...state,
            tracks: res?.data?.data?.tracks,
            total: res?.data?.data?.total,
            offset: res?.data?.data?.offset,
          }));
        } else {
          setResponse((state) => ({
            ...state,
            tracks: [...state?.tracks, ...res?.data?.data?.tracks],
            offset: res?.data?.data?.offset,
          }));
        }
      }
    }
  };

  useEffect(() => {
    document.title = `Musicon - Playlist`;

    const cancelToken = axios.CancelToken.source();

    if (user) {
      (async () => {
        let res;
        try {
          res = await instance.get("/music/user-playlist", {
            params: {
              id,
            },
            cancelToken: cancelToken?.token,
          });
        } catch (err) {
          if (axios.isCancel(err)) {
            console.log("Cancelled");
          } else if (err?.response?.data?.status === 405) {
            alert("Not Logged");
            dispatch(setUser(null));
            navigate("/");
          } else if (typeof err?.response?.data?.message === "string") {
            alert(err?.response?.data?.message);
            navigate("/");
          } else {
            alert("Something Wrong");
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
      })();
    } else {
      dispatch(setLoading(true));
    }

    return () => {
      cancelToken?.cancel?.();
    };
  }, [location, user]);

  return (
    <div className="container" id="collections">
      {response?.details && (
        <Banner
          data={response?.details}
          inLibrary={true}
          libraryAction={libraryAction}
        />
      )}

      {response?.tracks?.[0] && (
        <CollectionsComp
          data={response?.tracks}
          collectionId={response?.details?.id}
          collectionType={"playlist"}
        />
      )}

      {response?.tracks?.length < response?.total && (
        <LoadMore onHandle={getTracks} />
      )}

      {library?.modal?.status && <LibraryModal formAction={LibFormAction} />}
    </div>
  );
};

export default Collections;
