import React, { useRef, useState } from "react";
import { Input } from "../../../components";
import { useDispatch } from "react-redux";
import { exitAuth, setAuth } from "../../../redux/auth";
import Mail from "./mail";
import { setUser } from "../../../redux/user";
import instance from "../../../lib/axios";

const Forgot = (params) => {
  const errorRef = useRef();

  const dispatch = useDispatch();

  const [state, setState] = useState({
    mail: false,
    form: {},
  });

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

  const inputHandle = (e) => {
    setState((state) => ({
      ...state,
      form: {
        ...state.form,
        [e?.target?.name]: e?.target?.value || "",
      },
    }));
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
        console.log(response);
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
    <Mail email={state?.form?.email || ""} handleForm={forgotApi} />
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
        inputHandle={inputHandle}
      />

      <label>Password</label>
      <Input
        type={"password"}
        placeholder={"Enter Password"}
        name={"password"}
        value={state?.form?.password || ""}
        inputHandle={inputHandle}
      />

      <label>Re Enter Password</label>
      <Input
        type={"password"}
        placeholder={"Re Enter Password"}
        name={"rePassword"}
        value={state?.form?.rePassword || ""}
        inputHandle={inputHandle}
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
