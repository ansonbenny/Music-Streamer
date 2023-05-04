import React, { useRef } from "react";
import { MagnifyingGlass } from "../../assets";
import "./style.scss";

const LibraryHead = () => {
  const svgRef = useRef();
  return (
    <div className="library_head">
      <div className="title">
        <h5>My Library</h5>
      </div>
      <div className="search_library">
        <MagnifyingGlass ref={svgRef} width={"16px"} height={"16px"} />
        <input
          type="text"
          name="search"
          placeholder="Search..."
          onFocus={() => {
            svgRef?.current?.classList?.add("active");
          }}
          onBlur={() => {
            svgRef?.current?.classList?.remove("active");
          }}
        />
      </div>
    </div>
  );
};

export default LibraryHead;
