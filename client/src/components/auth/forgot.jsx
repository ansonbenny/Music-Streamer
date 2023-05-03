import React from "react";
import { Input } from "..";

const Forgot = ({ modalDispatch }) => {
  return (
    <div className="form_auth">
      <h3>Forgot</h3>

      <label htmlFor="email">Email</label>
      <Input type={"email"} placeholder={"Enter Email"} name={"email"} />

      <label htmlFor="password">Password</label>
      <Input
        type={"password"}
        placeholder={"Enter Password"}
        name={"password"}
      />

      <label htmlFor="password">Re Enter Password</label>
      <Input
        type={"password"}
        placeholder={"Re Enter Password"}
        name={"re_password"}
      />

      <button type="submit">Forgot</button>

      <p data-for="IF" type="button">
        <span>Know the password?</span>{" "}
        <button
          onClick={() => {
            modalDispatch({ type: "login" });
          }}
        >
          Login now
        </button>
      </p>
    </div>
  );
};

export default Forgot;
