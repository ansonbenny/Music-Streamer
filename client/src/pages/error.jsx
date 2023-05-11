import React, { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setLoading } from "../redux/additional";
import { useDispatch } from "react-redux";

const Error = ({ customErr }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useLayoutEffect(() => {
    document.title = `Musicon - Error`;

    if (!customErr) {
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 1000);
    }
  }, []);
  return (
    <div className="container">
      <div className="error_page">
        <h1>{customErr ? customErr.status : "404"}</h1>
        <p>
          {customErr ? customErr.statusText : "This page could not be found."}
        </p>

        <button
          onClick={() => {
            if (customErr) {
              window.location.reload(false);
            } else {
              navigate("/");
            }
          }}
        >
          {customErr ? "Refresh" : "Back to homepage"}
        </button>
      </div>
    </div>
  );
};

export default Error;
