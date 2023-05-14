import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setContentLoad, setLoading } from "../redux/additional";

const Error = ({ customErr }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    document.title = `Musicon - Error`;
    dispatch(setLoading(false));
    dispatch(setContentLoad(false));
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
