import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Disc, Expand, List, MenuBar, Mic, MusicIcon } from "../../assets";
import { useDispatch } from "react-redux";
import { setExpand } from "../../redux/additional";
import "./style.scss";

const Menu = forwardRef(({ modalDispatch }, ref) => {
  const refs = useRef({
    menu: null,
    theme: null,
    fullScreen: null,
  });

  const dispatch = useDispatch();

  useImperativeHandle(ref, () => ({
    themeSwitch: (click) => {
      let theme = localStorage.getItem("theme");

      const dark = () => {
        localStorage.setItem("theme", "dark");

        document.body?.classList?.add("dark");
        document.body?.classList?.remove("light");

        refs.current.theme?.classList?.add("dark");
      };

      const light = () => {
        localStorage.removeItem("theme");

        document.body?.classList?.add("light");
        document.body?.classList?.remove("dark");

        refs.current.theme?.classList?.remove("dark");
      };

      if (click) {
        switch (theme ? theme : null) {
          case "dark":
            light();
            break;
          default:
            dark();
            break;
        }
      } else {
        switch (theme ? theme : null) {
          case "dark":
            dark();
            break;
          default:
            light();
            break;
        }
      }
    },
    menuToggle: (show) => {
      if (show) {
        // for show menu

        if (matchMedia("(max-width:767px)").matches) {
          // Small Device

          refs?.current?.menu?.classList?.add("showSm");
        } else {
          // Medium plus devices

          document.body?.classList?.remove("expand");
          refs?.current?.menu?.classList?.add("showMd");
          dispatch(setExpand(false));
        }
      } else {
        //for hide menu

        if (matchMedia("(max-width:767px)").matches) {
          // Small Device

          refs?.current?.menu?.classList?.remove("showSm");
        } else {
          // Medium plus devices

          document.body?.classList?.add("expand");
          refs?.current?.menu?.classList?.remove("showMd");
          dispatch(setExpand(true));
        }
      }
    },
  }));

  return (
    <div
      className="menu showMd"
      ref={(elm) => {
        if (refs?.current) {
          refs.current.menu = elm;
        }
      }}
    >
      <div className="inner">
        <div className="logo_menu">
          <div className="logo">
            <div className="dot" />
          </div>
          <div>
            <h1>Musicon</h1>
          </div>
          <div className="bar">
            <button
              onClick={() => {
                ref?.current?.menuToggle();
              }}
            >
              <MenuBar height={"16px"} width={"16px"} color={"#888"} />
            </button>
          </div>
        </div>

        <div className="scrollable">
          <div className="card">
            <h5>Hi {false ? "Anson" : "Signup Now"}</h5>

            <p>Follow your favorite artists and create unlimited playlists.</p>

            <div className="btns">
              {false ? (
                <>
                  <button>Account</button>
                  <button>Logout</button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      modalDispatch({ type: "signup" });
                    }}
                  >
                    Signup
                  </button>
                  <button
                    onClick={() => {
                      modalDispatch({ type: "login" });
                    }}
                  >
                    Login
                  </button>{" "}
                </>
              )}
            </div>
          </div>

          <div className="actions">
            <button className="active">
              <span>
                <Disc width={"16px"} height={"16px"} color={"#09c478"} />
              </span>
              Discover
            </button>
            <button>
              <span>
                <MusicIcon width={"16px"} height={"16px"} color={"#09c478"} />
              </span>
              Songs
            </button>
            <button>
              <span>
                <Mic width={"16px"} height={"16px"} color={"#09c478"} />
              </span>
              Artists
            </button>
            <button>
              <span>
                <List width={"16px"} height={"16px"} color={"#09c478"} />
              </span>
              Library
            </button>

            <button
              onClick={() => {
                if (refs?.current) {
                  import("./functions/fullScreen").then((module) => {
                    if (module.default()) {
                      refs.current["fullScreen"].innerHTML = "Exit fullscreen";
                    } else {
                      refs.current["fullScreen"].innerHTML = "Fullscreen";
                    }
                  });
                }
              }}
            >
              <span>
                <Expand width={"16px"} height={"16px"} color={"#09c478"} />
              </span>
              <span
                data-for="fullScreen"
                ref={(elem) => {
                  if (refs?.current) {
                    refs.current["fullScreen"] = elem;
                  }
                }}
              >
                Fullscreen
              </span>
            </button>

            <button
              ref={(elm) => {
                if (refs?.current) {
                  refs.current.theme = elm;
                }
              }}
              onClick={() => {
                ref?.current?.themeSwitch(true);
              }}
            >
              <span>
                <div className="swicth">
                  <div className="round" />
                </div>
              </span>
              Dark Mode
            </button>
          </div>

          <div className="rights">
            <p>@ Copyright {new Date().getFullYear()} Musicon</p>
          </div>
        </div>
      </div>

      <div
        className="blur"
        onClick={() => {
          ref?.current?.menuToggle();
        }}
      />
    </div>
  );
});

export default Menu;
