import React, { useEffect, useReducer, useState } from "react";
import { Input } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/additional";
import { useLocation, useNavigate } from "react-router-dom";
import instance from "../lib/axios";
import { setUser } from "../redux/user";

const reducer = (state, action) => {
  switch (action) {
    case "profile":
      return { profile: true };
    case "password": {
      return { password: true };
    }
    default:
      return {};
  }
};

const Account = () => {
  const location = useLocation();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { user } = useSelector((state) => state);

  const [state, stateDispatch] = useReducer(reducer, {});

  const [formData, setFormData] = useState({});

  const inputHandle = (e) => {
    setFormData((form) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  };

  const formHandle = async (e, isProfile) => {
    e.preventDefault();

    if (isProfile) {
      if (formData?.password_profile?.length >= 8) {
        let response;
        try {
          response = await instance.put("/user/edit-profile", {
            email: formData?.email || user?.email,
            name: formData?.name || user?.name,
            password_profile: formData?.password_profile,
          });
        } catch (err) {
          if (err?.response?.data?.status === 405) {
            alert("Not Logged");
            dispatch(setUser(null));
            navigate("/");
          } else if (typeof err?.response?.data?.message === "string") {
            alert(err?.response?.data?.message);
          } else {
            alert("Something Wrong");
          }
        } finally {
          if (response) {
            alert("Done");
            dispatch(setUser(response?.data?.data));
          }
        }
      } else {
        alert("Password Length Must 8");
      }
    } else {
      if (formData?.password?.length >= 8 && formData?.new_pass?.length >= 8) {
        let response;
        try {
          response = await instance.put("/user/edit-password", {
            password: formData?.password,
            new_pass: formData?.new_pass,
          });
        } catch (err) {
          if (err?.response?.data?.status === 405) {
            alert("Not Logged");
            dispatch(setUser(null));
            navigate("/");
          } else if (typeof err?.response?.data?.message === "string") {
            alert(err?.response?.data?.message);
          } else {
            alert("Something Wrong");
          }
        } finally {
          if (response) {
            alert("Done");
          }
        }
      } else {
        alert("Password Length Must 8");
      }
    }
  };

  useEffect(() => {
    document.title = `Musicon - Account`;

    if (user) {
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 1000);
    } else {
      dispatch(setLoading(true));
    }
  }, [location, user]);

  return (
    <div className="account container">
      <div className="top">
        <div className="avatar">A</div>

        <div className="overview">
          <h1 className="userName">{user?.name}</h1>

          <p className="email">{user?.email}</p>
        </div>
      </div>

      <div className="forms">
        <div className="head">
          <h5>Profile</h5>
          <div className="btn">
            {state?.profile ? (
              <button
                onClick={() => {
                  stateDispatch();
                  setFormData({});
                }}
              >
                Hide
              </button>
            ) : (
              <button onClick={() => stateDispatch("profile")}>Edit</button>
            )}
          </div>
        </div>
        <form onSubmit={(e) => formHandle(e, true)}>
          <div className="inputs">
            <Input
              value={
                formData?.name !== undefined
                  ? formData?.name
                  : user?.name
                  ? user?.name
                  : ""
              }
              placeholder={"Name"}
              name={"name"}
              type={"text"}
              disable={state?.profile !== undefined ? false : true}
              inputHandle={inputHandle}
            />
            <Input
              value={
                formData?.email
                  ? formData?.email
                  : user?.email
                  ? user?.email
                  : ""
              }
              placeholder={"Email"}
              name={"email"}
              type={"email"}
              disable={state?.profile !== undefined ? false : true}
              inputHandle={inputHandle}
            />
            {state?.profile && (
              <Input
                value={
                  formData?.password_profile ? formData?.password_profile : ""
                }
                placeholder={"Password"}
                name={"password_profile"}
                type={"password"}
                disable={state?.profile ? false : true}
                inputHandle={inputHandle}
              />
            )}
          </div>

          {state?.profile && <button type="submit">Save Changes</button>}
        </form>

        <div className="head">
          <h5>Password</h5>
          <div className="btn">
            {state?.password ? (
              <button
                onClick={() => {
                  stateDispatch();
                  setFormData({});
                }}
              >
                Hide
              </button>
            ) : (
              <button onClick={() => stateDispatch("password")}>Edit</button>
            )}
          </div>
        </div>
        <form onSubmit={formHandle}>
          <div className="inputs">
            <Input
              value={formData?.password ? formData?.password : ""}
              placeholder={"Current Password"}
              name={"password"}
              type={"password"}
              disable={state?.password ? false : true}
              inputHandle={inputHandle}
            />
            <Input
              value={formData?.new_pass ? formData?.new_pass : ""}
              placeholder={"New Password"}
              name={"new_pass"}
              type={"password"}
              disable={state?.password ? false : true}
              inputHandle={inputHandle}
            />
          </div>

          {state?.password && <button type="submit">Save Changes</button>}
        </form>
      </div>
    </div>
  );
};

export default Account;
