import React, { useEffect, useRef } from "react";
import { Down, MagnifyingGlass, Trash } from "../../assets";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const LibraryHead = ({ getData, isHistory, clearHistory, extraNeed }) => {
  const ref = useRef({
    search: null,
    svg: null,
    dropdown: null,
    "dropdown-btn": null,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const dropdownClose = (e) => {
      if (!ref?.current?.dropdown?.contains(e?.target)) {
        if (!ref?.current?.["dropdown-btn"].contains(e?.target)) {
          ref?.current?.dropdown?.classList?.remove?.("active");
        }
      }
    };

    window.addEventListener("click", dropdownClose);

    return () => {
      window.removeEventListener("click", dropdownClose);
    };
  }, []);

  return (
    <div className="library_head">
      <div className="actions">
        <button
          ref={(elm) => {
            if (ref?.current) {
              ref.current["dropdown-btn"] = elm;
            }
          }}
          onClick={() => {
            ref?.current?.dropdown?.classList?.add?.("active");
          }}
        >
          {isHistory ? "History" : "Playlists"}
          <span>
            <Down width={"16px"} height={"16px"} />
          </span>
        </button>

        <div
          className="dropdown"
          ref={(elm) => {
            if (ref?.current) {
              ref.current.dropdown = elm;
            }
          }}
        >
          {isHistory ? (
            <button
              onClick={() => {
                navigate("/library/playlists");
              }}
            >
              Playlists
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/library/history");
              }}
            >
              History
            </button>
          )}
        </div>
      </div>

      {extraNeed && (
        <form
          className="search_library"
          onSubmit={(e) => {
            e.preventDefault();
            getData(undefined, ref?.current?.search?.value);
          }}
        >
          <MagnifyingGlass
            ref={(elm) => {
              if (ref?.current) {
                ref.current.svg = elm;
              }
            }}
            width={"16px"}
            height={"16px"}
          />
          <input
            type="text"
            name="search"
            placeholder="Search..."
            ref={(elm) => {
              if (ref?.current) {
                ref.current.search = elm;
              }
            }}
            onFocus={() => {
              ref?.current?.svg?.classList?.add("active");
            }}
            onBlur={() => {
              ref?.current?.svg?.classList?.remove("active");
            }}
          />
        </form>
      )}

      {isHistory && extraNeed ? (
        <button
          className="clear-history"
          onClick={() => {
            clearHistory();
          }}
        >
          <Trash width={"16px"} height={"16px"} />
        </button>
      ) : null}
    </div>
  );
};

export default LibraryHead;
