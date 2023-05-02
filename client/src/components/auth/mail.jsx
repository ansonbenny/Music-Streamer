import React from "react";
import { MailIcon } from "../../assets";

const Mail = () => {
  return (
    <div className="mail">
      <MailIcon width={"5rem"} height={"5rem"} />
      <p>
        Please check the email address ansonbenny14@gmail.com for instructions
        to signup.
      </p>
      <button type="button">Resend</button>
    </div>
  );
};

export default Mail;
