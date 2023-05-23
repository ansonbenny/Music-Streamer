import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLibraryModal } from "../../redux/library";
import { setUser } from "../../redux/user";
import instance from "../../lib/axios";
import axios from "axios";
import "./style.scss";

const LibraryModal = ({ isLibrary, formAction }) => {
  const ref = useRef({
    modal: null,
  });

  const dispatch = useDispatch();

  const { modal } = useSelector((state) => state.library);

  const [state, setState] = useState({
    form: {},
    playlists: [],
  });

  // for track
  const getPlaylists = async (cancelToken, search) => {
    if (!isLibrary) {
      let res;

      try {
        res = await instance.get("/music/search-user-playlists", {
          cancelToken: cancelToken?.token || null,
          params: {
            search,
          },
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
          setState((state) => ({
            ...state,
            playlists: res?.data?.data,
          }));
        }
      }
    }
  };

  // for track
  useEffect(() => {
    let cancelToken = axios.CancelToken.source();
    if (!isLibrary) {
      getPlaylists(cancelToken);
    }

    return () => {
      cancelToken?.cancel?.();
    };
  }, []);

  return (
    <div
      className="libray_options"
      onClick={(e) => {
        if (!ref?.current?.modal?.contains(e.target)) {
          dispatch(setLibraryModal({ status: false }));
        }
      }}
    >
      <div
        className="inner"
        ref={(elm) => {
          if (ref?.current) {
            ref.current.modal = elm;
          }
        }}
      >
        {isLibrary ? (
          <>
            {modal?.id ? (
              <ul>
                <div className="edit_add">
                  <input
                    type="text"
                    name="library"
                    value={state?.form?.edit_name ? state?.form?.edit_name : ""}
                    onChange={(e) => {
                      setState((state) => ({
                        ...state,
                        form: {
                          ...state?.form,
                          edit_name: e.target.value,
                        },
                      }));
                    }}
                    placeholder="Enter library name"
                  />
                  <button
                    onClick={() => {
                      formAction?.("edit", {
                        playlistId: modal.id,
                        name: state?.form?.edit_name,
                      });
                    }}
                  >
                    edit
                  </button>
                </div>
                <li>
                  <button
                    onClick={() => {
                      formAction("delete", modal?.id);
                    }}
                  >
                    Delete
                  </button>
                </li>
              </ul>
            ) : (
              <ul>
                <div className="edit_add">
                  <input
                    type="text"
                    name="library"
                    value={
                      state?.form?.create_name ? state?.form?.create_name : ""
                    }
                    onChange={(e) => {
                      setState((state) => ({
                        ...state,
                        form: {
                          ...state?.form,
                          create_name: e.target.value,
                        },
                      }));
                    }}
                    placeholder="Enter library name"
                  />
                  <button
                    onClick={() => {
                      formAction?.("create", state?.form?.create_name);
                    }}
                  >
                    add
                  </button>
                </div>
              </ul>
            )}
          </>
        ) : (
          <div>
            <ul>
              <div className="edit_add">
                <input
                  type="text"
                  name="library"
                  ref={(elm) => {
                    if (ref?.current) {
                      ref.current.create = elm;
                    }
                  }}
                  placeholder="Enter library name"
                />
                <button
                  onClick={async () => {
                    // for track
                    if (
                      !isLibrary &&
                      ref?.current?.create?.value?.length >= 1
                    ) {
                      let res;
                      try {
                        res = await instance.post("/music/create-playlist", {
                          name: ref?.current?.create?.value,
                        });
                      } catch (err) {
                        if (err?.response?.data?.status === 405) {
                          dispatch(setUser(null));
                          dispatch(setLibraryModal({ status: false }));
                        } else {
                          console.log(err);
                          alert("Facing An Error");
                        }
                      } finally {
                        if (res?.data) {
                          getPlaylists();
                        }
                      }
                    }
                  }}
                >
                  add
                </button>
              </div>
              <form>
                {state?.playlists?.map((obj, key) => {
                  return (
                    <li key={key}>
                      <input
                        className="checkBox"
                        type="checkbox"
                        value={obj?.playlistId}
                        checked={
                          obj?.items?.find((obj) => {
                            return obj?.id === modal?.track;
                          })
                            ? true
                            : false
                        }
                        onChange={(e) => {
                          formAction(
                            obj.playlistId,
                            e.target.checked,
                            ref?.current?.search,
                            getPlaylists
                          );
                        }}
                      />
                      <label className="checkLabel">{obj?.name}</label>
                    </li>
                  );
                })}
              </form>

              <div data-for="live-search">
                <input
                  placeholder="Search"
                  type="text"
                  ref={(elm) => {
                    if (ref?.current) {
                      ref.current.search = elm;
                    }
                  }}
                  onChange={(e) => {
                    getPlaylists(undefined, e.target.value);
                  }}
                />
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default LibraryModal;
