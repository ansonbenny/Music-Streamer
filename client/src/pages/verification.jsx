import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error from "./error";
import { setLoading } from "../redux/additional";
import { useDispatch } from "react-redux";

const Verification = ({ isRegister }) => {
  const dispatch = useDispatch();

  const [error, setError] = useState(null);

  const { userId, secret } = useParams();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading({ site: false }));
    }, 1000);
  }, []);
  return error ? <Error customErr={error} /> : null;
};

export default Verification;
