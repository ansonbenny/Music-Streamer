import React, { useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { setLoading } from "../redux/additional";
import { setUser } from "../redux/user";
import instance from "../lib/axios";
import axios from "axios";

const ProtectedRoute = ({ isAuth }) => {
  const [component, setComponent] = useState(null); // for show component / page

  const location = useLocation();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useLayoutEffect(() => {
    // for user checking
    dispatch(setLoading({ api: true, site: true }));

    const cancelToken = axios.CancelToken.source();

    (async () => {
      let response;

      try {
        response = await instance.get("/user/checkLogged", {
          cancelToken: cancelToken.token,
        });

        if (response?.data?.data) {
          dispatch(setUser(response["data"].data));
        }
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Cancelled");
        } else if (err?.response?.data?.status === 405) {
          console.log("User Not Logged");

          dispatch(setUser(null));

          if (isAuth) {
            navigate("/");
          } else if (!isAuth) {
            setComponent(<Outlet />);
          }
        } else {
          console.log("Error");
          dispatch(setUser(null));
          if (isAuth) {
            navigate("/");
          } else if (!isAuth) {
            setComponent(<Outlet />);
          }
        }
      } finally {
        if (response?.["data"]?.data) {
          setComponent(<Outlet />);
        }
      }
    })();

    return () => {
      cancelToken.cancel();
    };
  }, [location, isAuth]);

  return component;
};

export default ProtectedRoute;
