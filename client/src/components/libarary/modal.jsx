import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLibraryModal } from "../../redux/library";
import "./style.scss";

const LibraryModal = ({ isLibrary, formAction }) => {
  const ref = useRef();

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({});

  const { modal } = useSelector((state) => state.library);

  // if not isLibrary add check box playlist names for music and add option for create playlist
  return (
    <div
      className="libray_options"
      onClick={(e) => {
        if (!ref?.current?.contains(e.target)) {
          dispatch(setLibraryModal({ status: false }));
        }
      }}
    >
      <div className="inner" ref={ref}>
        {isLibrary ? (
          <>
            {modal?.id ? (
              <ul>
                <div className="edit_add">
                  <input
                    type="text"
                    name="library"
                    value={formData?.edit_name ? formData?.edit_name : ""}
                    onChange={(e) => {
                      setFormData({
                        edit_name: e.target.value,
                      });
                    }}
                    placeholder="Enter library name"
                  />
                  <button
                    onClick={() => {
                      formAction("edit", {
                        playlistId: modal.id,
                        name: formData?.edit_name,
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
                    value={formData?.create_name ? formData?.create_name : ""}
                    onChange={(e) => {
                      setFormData({
                        create_name: e.target.value,
                      });
                    }}
                    placeholder="Enter library name"
                  />
                  <button
                    onClick={() => {
                      formAction("create", formData?.create_name);
                    }}
                  >
                    add
                  </button>
                </div>
              </ul>
            )}
          </>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default LibraryModal;
