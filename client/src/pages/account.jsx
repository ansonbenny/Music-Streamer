import React, { useLayoutEffect } from "react";
import { Input } from "../components";

const Account = () => {
  useLayoutEffect(()=>{
    document.title = `Musicon - Account`
  },[])
  return (
    <div className="account container">
      <div className="top">
        <div className="avatar">A</div>

        <div className="overview">
          <h1 className="userName">Anson Benny</h1>

          <p className="email">ansonbenny1544@gmail.com</p>
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
