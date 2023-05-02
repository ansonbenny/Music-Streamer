import React from "react";
import Form from "./form";
import Mail from "./mail";
import "./style.scss";

const Auth = () => {
  // redux check login or signup or forgot
  // add event lister for modal
  // add error design
  return (
    <div className="auth">
      <div className="inner">
        {
          //isSignup for signup modal

          false ? <Form /> : <Mail />
        }
      </div>
    </div>
  );
};

export default Auth;
