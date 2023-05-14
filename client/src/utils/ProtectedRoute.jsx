import React, { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/additional";
import { setUser } from "../redux/user";
import { Error } from "../pages";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import instance from "../lib/axios";
import axios from "axios";

const ProtectedRoute = ({ isAuth }) => {
  const dispatch = useDispatch();

  const location = useLocation();

  const navigate = useNavigate();

  const [customErr, setCustomErr] = useState(null);

  const { user, additional } = useSelector((state) => state);

  useLayoutEffect(() => {
    setCustomErr(null);
    dispatch(setLoading(true));

    const cancelToken = axios.CancelToken.source();

    (async () => {
      let response;

      try {
        response = await instance.get("/user/checkLogged", {
          cancelToken: cancelToken.token,
        });
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Cancelled");
        } else if (err?.response?.data?.status === 405) {
          console.log("User Not Logged");

          dispatch(setUser(null));

          if (isAuth) {
            navigate("/");
          }

          setTimeout(() => {
            dispatch(setLoading(false));
          }, 1000);
        } else {
          console.log(err);

          setCustomErr({
            status: err?.response?.status || 500,
            statusText: err?.response?.statusText || "Something went wrong",
          });

          setTimeout(() => {
            dispatch(setLoading(false));
          }, 1000);
        }
      } finally {
        if (response?.["data"]?.data) {
          dispatch(setUser(response["data"].data));
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

  return !additional?.loading ? (
    customErr ? (
      <Error customErr={customErr} />
    ) : user ? (
      <Outlet />
    ) : (
      !isAuth && <Outlet />
    )
  ) : null;
};

export default ProtectedRoute;
