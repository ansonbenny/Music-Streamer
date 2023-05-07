import React from "react";
import { Input } from "../../../components";
import { Google } from "../../../assets";

const Form = ({ isSignup, modalDispatch }) => {
  return (
    <div className="form_auth">
      {isSignup ? <h3>SignUp</h3> : <h3>Login</h3>}

      {isSignup && (
        <>
          <label htmlFor="email">Name</label>
          <Input type={"text"} placeholder={"Enter Name"} name={"name"} />
        </>
      )}

      <label htmlFor="email">Email</label>
      <Input type={"email"} placeholder={"Enter Email"} name={"email"} />

      <label htmlFor="password">Password</label>
      <Input
        type={"password"}
        placeholder={"Enter Password"}
        name={"password"}
      />

      {isSignup && (
        <>
          <label htmlFor="password">Re Enter Password</label>
          <Input
            type={"password"}
            placeholder={"Re Enter Password"}
            name={"re_password"}
          />
        </>
      )}

      {!isSignup ? (
        <>
          <button
            data-for="forgot"
            type="button"
            onClick={() => {
              modalDispatch({ type: "forgot" });
            }}
          >
            Forgot password?
          </button>

          <button type="submit">Login</button>
        </>
      ) : (
        <button type="submit">Signup</button>
      )}

      {isSignup ? (
        <p data-for="IF" type="button">
          <span>Already a member?</span>{" "}
          <button
            onClick={() => {
              modalDispatch({ type: "login" });
            }}
          >
            Login now
          </button>
        </p>
      ) : (
        <p data-for="IF" type="button">
          <span>Not a member?</span>{" "}
          <button
            onClick={() => {
              modalDispatch({ type: "signup" });
            }}
          >
            Signup now
          </button>
        </p>
      )}

      <p data-for="or-txt">OR</p>

      <button data-for="google" type="button">
        <Google width={"16px"} height={"16px"} />
        oogle
      </button>
    </div>
  );
};

export default Form;
