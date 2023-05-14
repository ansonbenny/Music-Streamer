import React, { useEffect } from "react";
import { Input } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/additional";
import { useLocation } from "react-router-dom";

const Account = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);

  useEffect(() => {
    document.title = `Musicon - Account`;

    dispatch(setLoading(true));

    if (user) {
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 1000);
    }
  }, [location]);
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
            <button>Edit</button>
          </div>
        </div>
        <form action="">
          <div className="inputs">
            <Input
              value={""}
              placeholder={"Name"}
              name={"name"}
              type={"text"}
              disable
            />
            <Input
              value={""}
              placeholder={"Email"}
              name={"email"}
              type={"email"}
              disable
            />
          </div>

          {false && <button type="submit">Save Changes</button>}
        </form>

        <div className="head">
          <h5>Password</h5>
          <div className="btn">
            <button>Edit</button>
          </div>
        </div>
        <form action="">
          <div className="inputs">
            <Input
              value={""}
              placeholder={"Current Password"}
              name={"current_pass"}
              type={"password"}
              disable
            />
            <Input
              value={""}
              placeholder={"New Password"}
              name={"new_pass"}
              type={"password"}
              disable
            />
          </div>

          {false && <button type="submit">Save Changes</button>}
        </form>
      </div>
    </div>
  );
};

export default Account;
