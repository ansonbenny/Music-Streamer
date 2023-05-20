import React, { useEffect, useState } from "react";
import { LibraryHead, LibraryModal, LoadMore, Row } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/additional";
import { useLocation, useNavigate } from "react-router-dom";
import { setLibraryModal } from "../redux/library";
import { setUser } from "../redux/user";
import axios from "axios";
import instance from "../lib/axios";

const Library = () => {
  const dispatch = useDispatch();

  const location = useLocation();

  const navigate = useNavigate();

  const [response, setResponse] = useState();

  const { user, library } = useSelector((state) => state);

  const loadMore = async () => {
    let res;

    try {
      res = await instance.get("/music/all-playlists", {
        params: {
          offset: response?.offset + 10,
        },
      });
    } catch (err) {
      if (err?.response?.data?.status === 405) {
        dispatch(setUser(null));
        navigate("/");
      } else {
        console.log(err);
        alert("Facing An Error");
        return true;
      }
    } finally {
      if (res?.data) {
        setResponse((state) => ({
          list: [...state.list, ...(res?.data?.data?.list || [])],
          offset: res?.data?.data?.offset || state?.offset || 0,
          total: res?.data?.data?.total || state?.total || 0,
        }));
        return true;
      }
    }
  };

  const libraryActions = async (type, data) => {
    if (type === "edit") {
      let res;
      try {
        res = await instance.put("/music/edit-playlist", {
          ...data,
        });
      } catch (err) {
        if (err?.response?.data?.status === 405) {
          dispatch(setUser(null));
          navigate("/");
        } else {
          console.log(err);
          alert("Facing An Error");
        }
      } finally {
        if (res?.data) {
          setResponse((state) => ({
            ...state,
            list: [
              ...state?.list?.map((obj) => {
                if (obj?.playlistId === data?.playlistId) {
                  obj.name = data.name;
                }

                return obj;
              }),
            ],
          }));
          dispatch(setLibraryModal({ status: false }));
        }
      }
    } else if (type === "create") {
      let res;
      try {
        res = await instance.post("/music/create-playlist", {
          name: data,
        });
      } catch (err) {
        if (err?.response?.data?.status === 405) {
          dispatch(setUser(null));
          navigate("/");
        } else {
          console.log(err);
          alert("Facing An Error");
        }
      } finally {
        if (res?.data) {
          setResponse((state) => ({
            ...state,
            list: [...state?.list, res?.data?.data],
          }));
          dispatch(setLibraryModal({ status: false }));
        }
      }
    } else if (type === "delete") {
      let res;
      try {
        res = await instance.delete("/music/delete-playlist", {
          data: {
            playlistId: data,
          },
        });
      } catch (err) {
        if (err?.response?.data?.status === 405) {
          dispatch(setUser(null));
          navigate("/");
        } else {
          console.log(err);
          alert("Facing An Error");
        }
      } finally {
        if (res?.data) {
          setResponse((state) => ({
            ...state,
            list: [
              ...state?.list?.filter((obj) => {
                return obj?.playlistId !== res?.data?.data?.playlistId;
              }),
            ],
            total: state?.total - 1,
            offset: state?.offset - 1,
          }));
          dispatch(setLibraryModal({ status: false }));
        }
      }
    }
  };

  useEffect(() => {
    document.title = `Musicon - Library`;

    let cancelToken = axios.CancelToken.source();

    if (user) {
      (async () => {
        let res;

        try {
          res = await instance.get("/music/all-playlists");
        } catch (err) {
          if (axios.isCancel(err)) {
            console.log("Cancelled");
          } else {
            console.log(err);
            alert("Facing An Error");
            setTimeout(() => {
              dispatch(setLoading(false));
            }, 1000);
          }
        } finally {
          if (res?.data) {
            setResponse(res?.data?.data || {});
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
      cancelToken?.cancel();
    };
  }, [location, user]);

  return (
    <div className="container">
      <LibraryHead />
      <Row isLibrary data={response?.list} />

      {response?.total > response?.list?.length && (
        <LoadMore onHandle={loadMore} />
      )}

      {library?.modal?.status && (
        <LibraryModal formAction={libraryActions} isLibrary />
      )}
    </div>
  );
};

export default Library;
