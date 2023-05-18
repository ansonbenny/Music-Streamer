import React, { useEffect, useState } from "react";
import {
  Banner,
  Collections as CollectionsComp,
  LoadMore,
  Row,
} from "../components";
import { useDispatch } from "react-redux";
import { setLoading } from "../redux/additional";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import instance from "../lib/axios";

const Collections = ({ isArtist, isPlaylist }) => {
  // same page for saved playlist item

  const location = useLocation();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { id } = useParams();

  const [response, setResponse] = useState();

  const loadMoreTracks = async () => {
    let res;
    try {
      res = await instance.get("/music/album-tracks-more", {
        params: {
          id,
          offset: response?.offset + 10,
        },
      });
    } catch (err) {
      if (typeof err?.response?.data?.message === "string") {
        console.log(err);
        alert(err?.response?.data?.message);
      } else {
        console.log(err);
        alert("Facing An Error");
      }

      return true;
    } finally {
      if (res?.data) {
        //  console.log(res?.data);
        setResponse((state) => ({
          ...state,
          tracks: [...state?.tracks, ...(res?.data?.data?.tracks || [])],
          offset: res?.data?.data?.offset,
        }));

        return true;
      }
    }
  };

  useEffect(() => {
    document.title = `Musicon`;

    const cancelToken = axios.CancelToken.source();

    if (isArtist) {
      (async () => {
        let res;
        try {
          res = await instance.get("/music/artist", {
            params: {
              id,
            },
            cancelToken: cancelToken.token,
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
      })();
    } else if (isPlaylist) {
    } else {
      (async () => {
        let res;
        try {
          res = await instance.get("/music/album", {
            params: {
              id,
            },
            cancelToken: cancelToken.token,
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
      })();
    }

    return () => {
      cancelToken.cancel();
    };
  }, [location]);

  return (
    <div className="container" id="collections">
      {response?.album ? (
        <Banner data={response?.album} />
      ) : (
        response?.artist && <Banner data={response?.artist} />
      )}

      {response?.tracks?.[0] && <CollectionsComp data={response?.tracks} />}

      {response?.tracks?.length < response?.total && (
        <LoadMore onHandle={loadMoreTracks} />
      )}

      {response?.related?.[0] && (
        <Row
          title={isArtist ? "Popular Albums" : "New Releases"}
          data={response?.related}
        />
      )}
    </div>
  );
};

export default Collections;
