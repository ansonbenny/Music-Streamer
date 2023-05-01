import React from "react";
import { Eye, EyeHide } from "../../assets";
import "./style.scss";

const Input = ({ name, placeholder, value, type, disable }) => {
  return (
    <div className={`custom-input ${type}`}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        disabled={disable}
      />

      {type === "password" && (
        <button type="button" className="show_hide">
          <EyeHide width={"16px"} height={"16px"} color={"#322"} />
        </button>
      )}
    </div>
  );
};

export default Input;
