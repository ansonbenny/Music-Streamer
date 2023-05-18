import React, { useEffect, useState } from "react";
import { Row, FIlterSearch, LoadMore } from "../components";
import { setLoading } from "../redux/additional";
import { useDispatch } from "react-redux";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import Error from "./error";
import axios from "axios";
import instance from "../lib/axios";

const Search = () => {
  const location = useLocation();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { type } = useParams();

  const [searchParams] = useSearchParams();

  const [response, setResponse] = useState({});

  const onLoad = async () => {
    let res;
    try {
      res = await instance("/music/search", {
        params: {
          type,
          offset: response?.offset + 10,
          search:
            searchParams.get("q")?.length > 0
              ? searchParams.get("q")
              : undefined,
        },
      });
    } catch (err) {
      if (typeof err?.response?.data?.message === "string") {
        console.log(err);
        alert(err?.response?.data?.message);
      } else {
        console.log(err);
        alert("Facing An Error");
      }

      return true;
    } finally {
      if (res?.data) {
        setResponse((state) => ({
          [`${type}s`]: [
            ...state[`${type}s`],
            ...(res?.data?.data?.[`${type}s`] || []),
          ],
          offset: res?.data?.data?.offset,
        }));

        return true;
      }
    }
  };

  useEffect(() => {
    document.title = `Musicon - Search ${searchParams.get("q") || ""}`;

    const cancelToken = axios.CancelToken.source();

    const getSearch = async (type) => {
      let res;
      try {
        res = await instance("/music/search", {
          params: {
            type,
            search:
              searchParams.get("q")?.length > 0
                ? searchParams.get("q")
                : undefined,
          },
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
          setResponse(res?.data?.data);
          setTimeout(() => {
            dispatch(setLoading(false));
          }, 1000);
        }
      }
    };

    if (type === "album") {
      getSearch("album");
    } else if (type === "artist") {
      getSearch("artist");
    } else if (type === "track") {
      getSearch("track");
    } else if (!type) {
      getSearch();
    } else {
      navigate("/404");
    }

    return () => {
      cancelToken.cancel();
    };
  }, [location]);

  return (
    <div className="container">
      <FIlterSearch type={type} q={searchParams.get("q") || ""} />

      {!response?.empty ? (
        <>
          {response?.artists?.[0] && (
            <Row
              title={"Artists"}
              data={response?.artists}
              isCarousel={type ? false : true}
              isRound
            />
          )}

          {response?.albums?.[0] && (
            <Row
              title={"Albums"}
              data={response?.albums}
              isCarousel={type ? false : true}
            />
          )}

          {response?.tracks?.[0] && (
            <Row
              title={"Tracks"}
              data={response?.tracks}
              isCarousel={type ? false : true}
            />
          )}

          {type === "artist" || type === "track" || type === "album" ? (
            <>
              {response?.[`${type}s`]?.length > 0 && (
                <LoadMore onHandle={onLoad} />
              )}
            </>
          ) : null}
        </>
      ) : (
        <Error
          customErr={{
            status: 404,
            statusText: "Data not found in our database.",
          }}
        />
      )}
    </div>
  );
};

export default Search;
