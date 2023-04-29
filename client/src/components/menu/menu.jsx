import React, { forwardRef, useCallback, useRef } from "react";
import { Disc, Expand, List, MenuBar, Mic, MusicIcon } from "../../assets";
import "./style.scss";

const Menu = forwardRef((params, ref) => {
  const darkSwitch = useRef();

  const fullScreen = useCallback(() => {
    var isInFullScreen =
      (document.fullscreenElement && document.fullscreenElement !== null) ||
      (document.webkitFullscreenElement &&
        document.webkitFullscreenElement !== null) ||
      (document.mozFullScreenElement &&
        document.mozFullScreenElement !== null) ||
      (document.msFullscreenElement && document.msFullscreenElement !== null);

    var docElm = document.documentElement;
    if (!isInFullScreen) {
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
      } else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
      } else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
      } else if (docElm.msRequestFullscreen) {
        docElm.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  }, []);
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

        <div className="card">
          <h5>Hi SignUp Now</h5>

          <p>Follow your favorite artists and create unlimited playlists.</p>

          <div className="btns">
            <button>Signup</button>
            <button>Login</button>
          </div>
        </div>

        <div className="actions">
          {
            // active for btn bold
          }
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

          <button onClick={fullScreen}>
            <span>
              <Expand width={"16px"} height={"16px"} color={"#09c478"} />
            </span>
            Fullscreen
          </button>

          <button
            ref={darkSwitch}
            onClick={() => {
              if (document.body?.classList?.contains("dark")) {
                document.body?.classList?.add("light");
                document.body?.classList?.remove("dark");

                darkSwitch?.current?.classList?.remove("dark");
              } else {
                document.body?.classList?.add("dark");
                document.body?.classList?.remove("light");

                darkSwitch?.current?.classList?.add("dark");
              }
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
