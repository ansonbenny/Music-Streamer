import React, { useEffect, useState } from "react";
import { LibraryHead, LibraryModal, LoadMore, Row } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/additional";
import { useLocation, useNavigate } from "react-router-dom";
import { setLibraryModal } from "../redux/library";
import { setUser } from "../redux/user";
import axios from "axios";
import instance from "../lib/axios";

const Playlists = () => {
  const dispatch = useDispatch();

  const location = useLocation();

  const navigate = useNavigate();

  const [state, setState] = useState({
    response: {},
    search: "",
  });

  const { user, library } = useSelector((state) => state);

  const loadMore = async (offset) => {
    let res;

    try {
      res = await instance.get("/music/all-playlists", {
        params: {
          offset: offset ? offset : state?.response?.offset + 10,
          search: state?.search || "",
        },
      });
    } catch (err) {
      if (err?.response?.data?.status === 405) {
        dispatch(setUser(null));
        navigate("/");
      } else {
        alert("Facing An Error");
        return true;
      }
    } finally {
      if (res?.data) {
        setState((state) => ({
          ...state,
          response: {
            ...state?.response,
            list: [...state?.response?.list, ...(res?.data?.data?.list || [])],
            offset: res?.data?.data?.offset || state?.response?.offset || 0,
            total: res?.data?.data?.total || state?.response?.total || 0,
          },
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
          alert("Facing An Error");
        }
      } finally {
        if (res?.data) {
          setState((state) => ({
            ...state,
            response: {
              ...state?.response,
              list: [
                ...state?.response?.list?.map((obj) => {
                  if (obj?.playlistId === data?.playlistId) {
                    obj.name = data.name;
                  }

                  return obj;
                }),
              ],
            },
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
          alert("Facing An Error");
        }
      } finally {
        if (res?.data) {
          getPlaylists(undefined, state?.search);
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
          alert("Facing An Error");
        }
      } finally {
        if (res?.data) {
          setState((state) => ({
            ...state,
            response: {
              ...state?.response,
              list: [
                ...state?.response?.list?.filter((obj) => {
                  return obj?.playlistId !== res?.data?.data?.playlistId;
                }),
              ],
              total: state?.response?.total - 1,
              offset: state?.response?.offset - 1,
            },
          }));
          dispatch(setLibraryModal({ status: false }));
        }
      }
    }
  };

  const getPlaylists = async (cancelToken, search) => {
    let res;

    try {
      res = await instance.get("/music/all-playlists", {
        params: {
          search: search,
        },
        cancelToken: cancelToken?.token || null,
      });
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log("Cancelled");
      } else {
        alert("Facing An Error");
        setTimeout(() => {
          dispatch(setLoading(false));
        }, 1000);
      }
    } finally {
      if (res?.data) {
        setState({
          ...state,
          response: res?.data?.data || {},
          search: search,
        });
        setTimeout(() => {
          dispatch(setLoading(false));
        }, 1000);
      }
    }
  };

  useEffect(() => {
    document.title = `Musicon - Library`;

    let cancelToken = axios.CancelToken.source();

    if (user) {
      getPlaylists(cancelToken);
    } else {
      dispatch(setLoading(true));
    }

    return () => {
      cancelToken?.cancel();
    };
  }, [location, user]);

  return (
    <div className="container">
      <LibraryHead
        getData={getPlaylists}
        extraNeed={state?.response?.list?.length > 0 ? true : false}
      />
      <Row isLibrary data={state?.response?.list} />

      {state?.response?.total > state?.response?.list?.length && (
        <LoadMore onHandle={loadMore} />
      )}

      {library?.modal?.status && (
        <LibraryModal formAction={libraryActions} isLibrary />
      )}
    </div>
  );
};

export default Playlists;
