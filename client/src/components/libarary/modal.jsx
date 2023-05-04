import React, { useRef } from "react";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { setLibraryModal } from "../../redux/library";

const LibraryModal = () => {
  const ref = useRef();

  const dispatch = useDispatch();

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
        {modal.isLibrary ? (
          <>
            {modal?.id ? (
              <ul>
                <div className="edit_add">
                  <input
                    type="text"
                    name="libray"
                    placeholder="Enter library lame"
                  />
                  <button>edit</button>
                </div>
                <li>
                  <button>Delete</button>
                </li>
              </ul>
            ) : (
              <ul>
                <div className="edit_add">
                  <input
                    type="text"
                    name="libray"
                    placeholder="Enter library lame"
                  />
                  <button>add</button>
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
