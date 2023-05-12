import React, { useRef, useState } from "react";
import { Input } from "../../../components";
import { Google } from "../../../assets";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/user";
import { exitAuth, setAuth } from "../../../redux/auth";
import instance from "../../../lib/axios";
import Mail from "./mail";

const Form = ({ isSignup }) => {
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

  const register = (resent) => {
    const callApi = async () => {
      let response;

      try {
        response = await instance.post("/user/register", {
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
    if (!resent) {
      if (state?.form?.password?.length >= 8) {
        if (state?.form?.password === state?.form?.rePassword) {
          callApi();
        } else {
          errorHandle("Password And Re Password Must Equal");
        }
      } else {
        errorHandle("Enter Password And Password Length Must Contain 8");
      }
    } else {
      callApi();
    }
  };

  const login = async () => {
    if (state?.form?.password?.length >= 8) {
      let response;

      try {
        response = await instance.get("/user/login", {
          params: {
            email: state?.form?.email || "",
            password: state?.form?.password || "",
          },
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
        if (response?.data) {
          dispatch(setUser(response["data"].data));
          alert("Successfully Logged");
          errorHandle();
          dispatch(exitAuth());
        }
      }
    } else {
      errorHandle("Enter Password And Password Length Must Contain 8");
    }
  };

  const formHandle = async (e) => {
    e.preventDefault();

    if (isSignup) {
      // signup
      register();
    } else {
      // login
      login();
    }
  };

  return state?.mail ? (
    <Mail email={state?.form?.email || ""} handleForm={register} />
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
            inputHandle={inputHandle}
          />
        </>
      )}

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

      {isSignup && (
        <>
          <label>Re Enter Password</label>
          <Input
            type={"password"}
            placeholder={"Re Enter Password"}
            name={"rePassword"}
            value={state?.form?.rePassword || ""}
            inputHandle={inputHandle}
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

      <button data-for="google" type="button">
        <Google width={"16px"} height={"16px"} />
        oogle
      </button>
    </form>
  );
};

export default Form;
