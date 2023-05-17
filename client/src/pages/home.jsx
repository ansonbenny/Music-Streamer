import React, { useEffect, useState } from "react";
import { Carousel, Row, Recommended } from "../components";
import { useDispatch } from "react-redux";
import { setLoading } from "../redux/additional";
import { useLocation } from "react-router-dom";
import axios from "axios";
import instance from "../lib/axios";

const Home = () => {
  const location = useLocation();

  const dispatch = useDispatch();

  const [response, setResponse] = useState({});

  useEffect(() => {
    document.title = `Musicon`;

    const cancelToken = axios.CancelToken.source();

    (async () => {
      let res;

      try {
        res = await instance.get("/music/all", {
          cancelToken: cancelToken.token,
        });
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Cancelled");
        } else if (typeof err?.response?.data?.message === "string") {
          console.log(err);
          alert(err?.response?.data?.message);
          setTimeout(() => {
            dispatch(setLoading(false));
          }, 1000);
        } else {
          console.log(err);
          alert("Facing An Error");
          setTimeout(() => {
            dispatch(setLoading(false));
          }, 1000);
        }
      } finally {
        if (res?.data) {
        //  console.log(res?.["data"]?.data);
          setResponse(res?.["data"]?.data);
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
      {response?.albums?.[0] && (
        <Carousel title={"Featured"} data={response?.albums} />
      )}

      {response?.albums_2?.[0] && <Recommended data={response?.albums_2} />}

      {response?.tracks?.[0] && (
        <Row title={"New Featured"} data={response?.tracks} />
      )}

      {response?.artists?.[0] && (
        <Row
          title={"Top Artists"}
          data={response?.artists}
          isCarousel
          isRound
        />
      )}

      {response?.tracks_2?.[0] && (
        <Row title={"New music"} data={response?.tracks_2} />
      )}
    </div>
  );
};

export default Home;
