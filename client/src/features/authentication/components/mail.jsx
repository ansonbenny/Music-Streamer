import React from "react";
import { MailIcon } from "../../../assets";

const Mail = ({ email, handleForm }) => {
  return (
    <div className="mail">
      <MailIcon width={"5rem"} height={"5rem"} />
      <p>Please check the email address {email} for instructions to signup.</p>
      <button
        onClick={() => {
          handleForm(true);
        }}
        type="button"
      >
        Resend
      </button>
    </div>
  );
};

export default Mail;
