import React, { useRef } from "react";
import { Input } from "../../../components";
import { Google } from "../../../assets";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/user";
import { exitAuth, setAuth } from "../../../redux/auth";
import { useGoogleLogin } from "@react-oauth/google";
import instance from "../../../lib/axios";
import Mail from "./mail";
import axios from "axios";
import useAuthState from "../hooks/useAuthState";

const Form = ({ isSignup }) => {
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

  const register = async (google) => {
    let response;

    try {
      response = await instance.post("/user/register", {
        name: state?.form?.name || "",
        email: state?.form?.email || "",
        password: state?.form?.password || "",
        rePassword: state?.form?.rePassword || "",
        google: state?.form?.google,
      });
    } catch (err) {
      if (
        err?.response?.data?.status &&
        typeof err?.response?.data?.message === "string"
      ) {
        errorHandle(err.response.data.message);
      } else {
        errorHandle("Something Wrong Server Getting Error");
      }
    } finally {
      if (response?.["data"]?.status === 208) {
        dispatch(setUser(response["data"].data));
        alert("Already Logged");
        errorHandle();
        dispatch(exitAuth());
      } else if (response?.data?.google) {
        alert("Successfully Registered");
        dispatch(exitAuth());
      } else if (response?.data) {
        setState((state) => ({
          ...state,
          mail: true,
        }));
      }
    }
  };

  const login = async (google) => {
    let response;

    try {
      response = await instance.get("/user/login", {
        params: {
          email: state?.form?.email || "",
          password: state?.form?.password || "",
          google,
        },
      });
    } catch (err) {
      if (
        err?.response?.data?.status &&
        typeof err?.response?.data?.message === "string"
      ) {
        errorHandle(err.response.data.message);
      } else {
        errorHandle("Something Wrong Server Getting Error");
      }
    } finally {
      if (response?.data) {
        dispatch(setUser(response["data"].data));
        alert("Successfully Logged");
        errorHandle();
        dispatch(exitAuth());
      }
    }
  };

  const google = useGoogleLogin({
    onSuccess: async (response) => {
      errorHandle();
      if (isSignup) {
        try {
          const res = await axios.get(
            "https://www.googleapis.com/oauth2/v3/userinfo",
            {
              headers: {
                Authorization: `Bearer ${response?.access_token}`,
              },
            }
          );

          if (res) {
            setState((state) => ({
              ...state,
              form: {
                ...state.form,
                email: res?.data?.email || "",
                name: res?.data?.name || "",
                google: response?.access_token,
              },
            }));
          }
        } catch (err) {
          errorHandle("Failing Google SignUp");
        }
      } else {
        login(response?.access_token);
      }
    },
    onError: (err) => {
      errorHandle("Failing Google Login");
    },
    cookiePolicy: "single-host-origin",
  });

  const formHandle = async (e) => {
    e.preventDefault();

    if (isSignup) {
      if (state?.form?.password?.length >= 8) {
        if (state?.form?.password === state?.form?.rePassword) {
          register();
        } else {
          errorHandle("Password And Re Password Must Equal");
        }
      } else {
        errorHandle("Enter Password And Password Length Must Contain 8");
      }
    } else {
      if (state?.form?.password?.length >= 8) {
        login();
      } else {
        errorHandle("Enter Password And Password Length Must Contain 8");
      }
    }
  };

  return state?.mail ? (
    <Mail
      email={state?.form?.email || ""}
      type={"signup"}
      handleForm={register}
    />
  ) : (
    <form className="form_auth" onSubmit={formHandle}>
      {isSignup ? <h3>SignUp</h3> : <h3>Login</h3>}

      <p data-for="error" ref={errorRef} />

      {isSignup && (
        <>
          <Input
            type={"text"}
            placeholder={"Enter Name"}
            name={"name"}
            value={state?.form?.name || ""}
            inputHandle={setState}
          />
        </>
      )}

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

      {isSignup && (
        <>
          <label>Re Enter Password</label>
          <Input
            type={"password"}
            placeholder={"Re Enter Password"}
            name={"rePassword"}
            value={state?.form?.rePassword || ""}
            inputHandle={setState}
          />
        </>
      )}

      {!isSignup ? (
        <>
          <button
            data-for="forgot"
            type="button"
            onClick={() => {
              dispatch(setAuth({ forgot: true }));
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
              dispatch(setAuth({ login: true }));
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
              dispatch(setAuth({ signup: true }));
            }}
          >
            Signup now
          </button>
        </p>
      )}

      <p data-for="or-txt">OR</p>

      <button onClick={google} data-for="google" type="button">
        <Google width={"16px"} height={"16px"} />
        oogle
      </button>
    </form>
  );
};

export default Form;
