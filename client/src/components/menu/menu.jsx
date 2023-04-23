import React, { forwardRef } from "react";
import { MenuBar } from "../../assets";
import "./style.scss";

const Menu = forwardRef((params, ref) => {
  return (
    <div className="menu showMd" ref={ref}>
      <div className="inner">
        <div className="Head">
          <div className="logo">
            <div className="dot" />
          </div>
          <div>
            <h1>Musicon</h1>
          </div>
          <div className="bar">
            <button
              onClick={() => {
                if (matchMedia("(max-width:767px)").matches) {
                  // Small Device

                  ref?.current?.classList?.remove("showSm");
                } else {
                  // Medium plus devices

                  document.body?.classList?.add("expand");
                  ref?.current?.classList?.remove("showMd");
                }
              }}
            >
              <MenuBar height={"16px"} width={"16px"} color={"#888"} />
            </button>
          </div>
        </div>

        <div className="actions">
          <button
            onClick={() => {
              if (document.body?.classList?.contains("dark")) {
                document.body?.classList?.add("light");
                document.body?.classList.remove("dark");
              } else {
                document.body?.classList?.add("dark");
                document.body?.classList.remove("light");
              }
            }}
          >
            Dark Mode
          </button>
        </div>
      </div>

      <div
        className="blur"
        onClick={() => {
          if (matchMedia("(max-width:767px)").matches) {
            ref?.current?.classList?.remove("showSm");
          }
        }}
      />
    </div>
  );
});

export default Menu;
