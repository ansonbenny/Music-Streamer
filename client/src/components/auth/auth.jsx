import React, { useRef } from "react";
import { Form, Forgot, Mail } from "./";
import "./style.scss";

const Auth = ({ stateModal, modalDispatch }) => {
  // redux check login or signup or forgot
  // add error design
  const ref = useRef(null);

  const CheckForm = () => {
    if (stateModal?.login) {
      return <Form modalDispatch={modalDispatch} />;
    } else if (stateModal?.signup) {
      return <Form modalDispatch={modalDispatch} isSignup />;
    } else if (stateModal?.forgot) {
      return <Forgot modalDispatch={modalDispatch} />;
    } else {
      console.log("MAIL");
    }
  };

  return (
    <div
      className="auth"
      onClick={(e) => {
        if (!ref?.current.contains(e.target)) {
          modalDispatch();
        }
      }}
    >
      <div className="inner" ref={ref}>
        {
          // if mail show mail
          <CheckForm />
        }
      </div>
    </div>
  );
};

export default Auth;
