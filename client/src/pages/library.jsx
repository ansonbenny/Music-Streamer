import React, { useEffect, useState } from "react";
import { LibraryHead, Row } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/additional";
import { useLocation } from "react-router-dom";
import axios from "axios";
import instance from "../lib/axios";

const Library = () => {
  const dispatch = useDispatch();

  const location = useLocation();

  const { user } = useSelector((state) => state);

  const [response, setResponse] = useState();

  useEffect(() => {
    document.title = `Musicon - Library`;

    let cancelToken = axios.CancelToken.source();

    if (user) {
      (async () => {
        let res;

        try {
          res = await instance("/music/all-playlists");
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
            setResponse(res?.data?.data || []);
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
      <Row isLibrary data={response} />
    </div>
  );
};

export default Library;
