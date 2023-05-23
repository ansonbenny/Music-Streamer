import React, { useEffect, useState } from "react";
import {
  Banner,
  Collections as CollectionsComp,
  LibraryModal,
  LoadMore,
  Row,
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

  const libraryAction = () => {
    const removeLib = async (type) => {
      let res;
      try {
        res = await instance.delete("/music/delete-playlist", {
          data: {
            id,
            type,
          },
        });
      } catch (err) {
        if (err?.response?.data?.status === 405) {
          dispatch(setAuth({ login: true }));
        } else {
          console.log(err);
          alert("Error");
        }
      } finally {
        if (res?.data) {
          setResponse((state) => ({
            ...state,
            inLibrary: false,
          }));
        }
      }
    };

    const cloneList = async (details) => {
      let res;
      try {
        res = await instance.post("/music/clone-collection-playlist", {
          id,
          ...details,
        });
      } catch (err) {
        if (err?.response?.data?.status === 405) {
          dispatch(setAuth({ login: true }));
        } else {
          console.log(err);
          alert("Error");
        }
      } finally {
        if (res?.data) {
          setResponse((state) => ({
            ...state,
            inLibrary: true,
          }));
        }
      }
    };

    if (isArtist) {
      if (response?.inLibrary) {
        removeLib("artist");
      } else {
        cloneList({
          type: "artist",
          name: response?.artist?.name,
          short: response?.artist?.genres?.[0],
          images: [response?.artist?.images?.[0]],
        });
      }
    } else {
      if (response?.inLibrary) {
        removeLib("album");
      } else {
        cloneList({
          type: "album",
          name: response?.album?.name,
          short: response?.album?.artists?.[0]?.name,
          images: [response?.album?.images?.[0]],
        });
      }
    }
  };

  const LibFormAction = async (playlistId, checked, search, reloadData) => {
    if (checked) {
      let res;

      try {
        res = await instance.put("/music/add-track-playlist", {
          playlistId,
          track: library?.modal?.track,
        });
      } catch (err) {
        if (err?.response?.data?.status === 405) {
          dispatch(setUser(null));
          dispatch(setLibraryModal({ status: false }));
        } else {
          alert("Facing An Error");
        }
      } finally {
        if (res?.data) {
          reloadData(search?.value);
        }
      }
    } else {
      let res;

      try {
        res = await instance.put("/music/remove-track-playlist", {
          playlistId,
          trackId: library?.modal?.track?.id,
        });
      } catch (err) {
        if (err?.response?.data?.status === 405) {
          dispatch(setUser(null));
          dispatch(setLibraryModal({ status: false }));
        } else {
          alert("Facing An Error");
        }
      } finally {
        if (res?.data) {
          reloadData(search?.value);
        }
      }
    }
  };

  useEffect(() => {
    document.title = `Musicon - ${isArtist ? "Artist" : "Album"}`;

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
  }, [location, user]);

  return (
    <div className="container" id="collections">
      {response?.album ? (
        <Banner
          data={response?.album}
          inLibrary={response?.inLibrary || false}
          libraryAction={libraryAction}
        />
      ) : (
        response?.artist && (
          <Banner
            data={response?.artist}
            inLibrary={response?.inLibrary || false}
            libraryAction={libraryAction}
          />
        )
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

      {library?.modal?.status && <LibraryModal formAction={LibFormAction} />}
    </div>
  );
};

export default Collections;
