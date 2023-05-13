import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Error from "./error";
import instance from "../lib/axios";
import { Loading } from "../components";

const Verification = ({ isRegister }) => {
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const { userId, secret } = useParams();

  useEffect(() => {
    (async () => {
      if (isRegister) {
        let response;

        try {
          response = await instance.post("/user/register-complete", {
            id: userId,
            secret,
          });
        } catch (err) {
          if (
            err?.response?.data?.status &&
            typeof err?.response?.data?.message === "string"
          ) {
            setError({
              status: err?.response?.data?.status || "500",
              statusText:
                err?.response?.data?.message ||
                "Something Wrong Server Getting Error",
            });
          } else {
            setError("Something Wrong Server Getting Error");
          }
        } finally {
          if (response?.["data"]?.status === 208) {
            alert("Already Logged");
            navigate("/");
          } else if (response?.data) {
            alert("Successfully Registered");
            navigate("/");
          }
        }
      } else {
        let response;
        try {
          response = await instance.put("/user/forgot-complete", {
            id: userId,
            secret,
          });
        } catch (err) {
          if (
            err?.response?.data?.status &&
            typeof err?.response?.data?.message === "string"
          ) {
            setError({
              status: err?.response?.data?.status || "500",
              statusText:
                err?.response?.data?.message ||
                "Something Wrong Server Getting Error",
            });
          } else {
            setError("Something Wrong Server Getting Error");
          }
        } finally {
          if (response?.["data"]?.status === 208) {
            alert("Already Logged");
            navigate("/");
          } else if (response?.data) {
            alert("Successfully Forgot");
            navigate("/");
          }
        }
      }
    })();
  }, []);
  return error ? <Error customErr={error} /> : <Loading />;
};

export default Verification;
