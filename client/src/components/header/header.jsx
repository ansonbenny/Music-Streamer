import React, { Fragment, useRef } from "react";
import { MagnifyingGlass, MenuBar } from "../../assets";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const Header = ({ menuRef }) => {
  const ref = useRef();
  const navigate = useNavigate();
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

          <form
            className="search"
            onSubmit={(e) => {
              e.preventDefault();
              navigate(`/search?q=${ref?.current?.value || ""}`);
            }}
          >
            <MagnifyingGlass width={"16px"} height={"16px"} />
            <input type="text" placeholder="Search..." ref={ref} />
          </form>
        </div>
      </div>

      <div className="spaceHeader" />
    </Fragment>
  );
};

export default Header;
