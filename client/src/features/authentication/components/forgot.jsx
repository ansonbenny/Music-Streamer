import React, { useRef } from "react";
import { Input } from "../../../components";
import { useDispatch } from "react-redux";
import { exitAuth, setAuth } from "../../../redux/auth";
import Mail from "./mail";
import { setUser } from "../../../redux/user";
import useAuthState from '../hooks/useAuthState'
import instance from "../../../lib/axios";

const Forgot = (params) => {
  const errorRef = useRef();

  const dispatch = useDispatch();

  const [state, setState] = useAuthState();

  const errorHandle = (error) => {
    if (error) {
      if (errorRef?.current) {
        errorRef.current.style.display = "block";
        errorRef.current.innerHTML = error;
      } else {
        alert(error);
      }
    } else {
      if (errorRef?.current) {
        errorRef.current.style.display = "none";
      }
    }
  };

  const forgotApi = async () => {
    let response;

    try {
      response = await instance.post("/user/forgot", {
        name: state?.form?.name || "",
        email: state?.form?.email || "",
        password: state?.form?.password || "",
        rePassword: state?.form?.rePassword || "",
      });
    } catch (err) {
      if (
        err?.response?.data?.status &&
        typeof err?.response?.data?.message === "string"
      ) {
        errorHandle(err.response.data.message);
      } else {
        console.log(err);
        errorHandle("Something Wrong Server Getting Error");
      }
    } finally {
      if (response?.["data"]?.status === 208) {
        dispatch(setUser(response["data"].data));
        alert("Already Logged");
        errorHandle();
        dispatch(exitAuth());
      } else if (response?.data) {
        setState((state) => ({
          ...state,
          mail: true,
        }));
      }
    }
  };

  const formHandle = (e) => {
    e.preventDefault();

    if (state?.form?.password?.length >= 8) {
      if (state?.form?.password === state?.form?.rePassword) {
        forgotApi();
      } else {
        errorHandle("Password And Re Password Must Equal");
      }
    } else {
      errorHandle("Enter Password And Password Length Must Contain 8");
    }
  };
  
  return state?.mail ? (
    <Mail email={state?.form?.email || ""} type={'forgot'} handleForm={forgotApi} />
  ) : (
    <form className="form_auth" onSubmit={formHandle}>
      <h3>Forgot</h3>

      <p data-for="error" ref={errorRef} />

      <label>Email</label>
      <Input
        type={"email"}
        placeholder={"Enter Email"}
        name={"email"}
        value={state?.form?.email || ""}
        inputHandle={setState}
      />

      <label>Password</label>
      <Input
        type={"password"}
        placeholder={"Enter Password"}
        name={"password"}
        value={state?.form?.password || ""}
        inputHandle={setState}
      />

      <label>Re Enter Password</label>
      <Input
        type={"password"}
        placeholder={"Re Enter Password"}
        name={"rePassword"}
        value={state?.form?.rePassword || ""}
        inputHandle={setState}
      />

      <button type="submit">Forgot</button>

      <p data-for="IF" type="button">
        <span>Know the password?</span>{" "}
        <button
          onClick={() => {
            dispatch(setAuth({ login: true }));
          }}
        >
          Login now
        </button>
      </p>
    </form>
  );
};

export default Forgot;
