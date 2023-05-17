import React, { useRef } from "react";
import "./style.scss";

const LoadMore = ({ onHandle }) => {
  const ref = useRef();
  return (
    <div className="load_more">
      <button
        ref={ref}
        onClick={async () => {
          ref?.current?.classList?.add("active");

          if (await onHandle()) {
            ref?.current?.classList?.remove("active");
          }
        }}
      >
        <span>&#9679; &#9679; &#9679;</span>
      </button>
    </div>
  );
};

export default LoadMore;
