import React, { useEffect, useState } from "react";
import { LibraryHead, LoadMore, Row } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/additional";
import { useLocation, useNavigate } from "react-router-dom";
import { setUser } from "../redux/user";
import {Error} from './'
import axios from "axios";
import instance from "../lib/axios";

const Library = () => {
  const dispatch = useDispatch();

  const location = useLocation();

  const navigate = useNavigate();

  const [state, setState] = useState({
    response: {},
    search: "",
  });

  const { user } = useSelector((state) => state);

  const loadMore = async (offset) => {
    let res;

    try {
      res = await instance.get("/music/getHistory", {
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

  const clearHistory = async () => {
    let res;
    try {
      res = await instance.put("/music/clearHistory");
    } catch (err) {
      if (err?.response?.data?.status === 405) {
        dispatch(setUser(null));
        navigate("/");
      } else {
        alert("Facing An Error");
      }
    } finally {
      if (res?.data) {
        getHistory();
      }
    }
  };

  const getHistory = async (cancelToken, search) => {
    let res;

    try {
      res = await instance.get("/music/getHistory", {
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
    document.title = `Musicon - History`;

    let cancelToken = axios.CancelToken.source();

    if (user) {
      getHistory(cancelToken);
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
        isHistory
        getData={getHistory}
        clearHistory={clearHistory}
        extraNeed={state?.response?.list?.length > 0 ? true : false}
      />
      {state?.response?.list?.length > 0 ? (
        <>
          <Row data={state?.response?.list} />

          {state?.response?.total > state?.response?.list?.length && (
            <LoadMore onHandle={loadMore} />
          )}
        </>
      ) : <Error customErr={{statusText:"History is clear.",status:"EMPTY"}}/>}
    </div>
  );
};

export default Library;
