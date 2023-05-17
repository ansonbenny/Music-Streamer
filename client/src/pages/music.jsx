import React, { useEffect, useState } from "react";
import { Banner, Row } from "../components";
import { useDispatch } from "react-redux";
import { setLoading } from "../redux/additional";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import instance from "../lib/axios";

const Music = () => {
  const location = useLocation();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { id } = useParams();

  const [response, setResponse] = useState([]);

  useEffect(() => {
    document.title = `Musicon`;

    const cancelToken = axios.CancelToken.source();

    (async () => {
      let res;
      try {
        res = await instance.get("/music/track", {
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
          //console.log(res?.data?.data)
          setResponse(res?.data?.data);
          setTimeout(() => {
            dispatch(setLoading(false));
          }, 1000);
        }
      }
    })();

    return () => {
      cancelToken.cancel();
    };
  }, [location]);
  return (
    <div className="container">
      {response?.track && <Banner data={response?.track} />}

      {response?.tracks?.[0] && (
        <Row
          title={`Popular by ${response?.track?.artists?.[0]?.name}`}
          data={response?.tracks}
        />
      )}
    </div>
  );
};

export default Music;
