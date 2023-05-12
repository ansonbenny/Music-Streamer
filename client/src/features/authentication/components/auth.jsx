import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Forgot, Mail } from ".";
import { exitAuth } from "../../../redux/auth";
import "./style.scss";

const Auth = (params) => {
  const ref = useRef(null);
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const CheckForm = () => {
    if (auth?.login) {
      return <Form />;
    } else if (auth?.signup) {
      return <Form isSignup />;
    } else if (auth?.forgot) {
      return <Forgot />;
    }
  };

  return (
    <div
      className="auth"
      onClick={(e) => {
        if (!ref?.current.contains(e.target)) {
          dispatch(exitAuth());
        }
      }}
    >
      <div className="inner" ref={ref}>
        <CheckForm />
      </div>
    </div>
  );
};

export default Auth;
