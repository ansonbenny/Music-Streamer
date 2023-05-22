import React, { useRef } from "react";
import { MagnifyingGlass } from "../../assets";
import "./style.scss";

const LibraryHead = ({getPlaylists}) => {
  const ref = useRef({
    search: null,
    svg: null,
  });
  return (
    <div className="library_head">
      <div className="title">
        <h5>My Library</h5>
      </div>
      <form
        className="search_library"
        onSubmit={(e) => {
          e.preventDefault();
          getPlaylists(undefined, ref?.current?.search?.value);
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
    </div>
  );
};

export default LibraryHead;
