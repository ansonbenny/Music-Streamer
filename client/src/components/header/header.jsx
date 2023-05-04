import React, { Fragment } from "react";
import { MagnifyingGlass, MenuBar } from "../../assets";
import "./style.scss";

const Header = ({ menuRef }) => {
  return (
    <Fragment>
      <div className="Header">
        <div className="inner">
          <div className="logo_menu">
            <div className="bar">
              <button
                onClick={() => {
                  menuRef?.current?.menuToggle(true);
                }}
              >
                <MenuBar height={"16px"} width={"16px"} color={"#888"} />
              </button>
            </div>
            <div className="logo">
              <div className="dot" />
            </div>
            <div>
              <h1>Musicon</h1>
            </div>
          </div>

          <div className="search">
            <MagnifyingGlass width={"16px"} height={"16px"} />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
      </div>

      <div className="spaceHeader" />
    </Fragment>
  );
};

export default Header;
