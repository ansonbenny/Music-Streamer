import React from "react";
import { MailIcon } from "../../../assets";

const Mail = ({ email, type, handleForm }) => {
  return (
    <div className="mail">
      <MailIcon width={"5rem"} height={"5rem"} />
      <p>
        Please check the email address {email} for instructions to {type}.
      </p>
      <button
        onClick={() => {
          handleForm();
        }}
        type="button"
      >
        Resend
      </button>
    </div>
  );
};

export default Mail;
