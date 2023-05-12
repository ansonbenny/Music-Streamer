import React, { useRef, useState } from "react";
import { Eye, EyeHide } from "../../assets";
import "./style.scss";

const Input = ({ name, placeholder, value, type, disable, inputHandle }) => {
  const [inputType, setType] = useState(type || null); // for password show and hide

  return (
    <div className={`custom-input ${type}`}>
      <input
        className={type}
        type={type === "password" ? inputType : type}
        name={name}
        placeholder={placeholder}
        disabled={disable}
        value={value}
        onChange={inputHandle}
      />

      {type === "password" &&
        (inputType === "password" ? (
          <button
            type="button"
            className="show_hide"
            onClick={() => {
              if (!disable) {
                setType("text");
              }
            }}
          >
            <Eye width={"16px"} height={"16px"} color={"#322"} />
          </button>
        ) : (
          <button
            type="button"
            className="show_hide"
            onClick={() => {
              if (!disable) {
                setType("password");
              }
            }}
          >
            <EyeHide width={"16px"} height={"16px"} color={"#322"} />
          </button>
        ))}
    </div>
  );
};

export default Input;
