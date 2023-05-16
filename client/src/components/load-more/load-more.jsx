import React from "react";
import "./style.scss";

const LoadMore = ({ active, onClick }) => {
  return (
    <div className="load_more">
      <button className={active ? "active" : ""}>
        {/* active for animation */}
        <span>&#9679; &#9679; &#9679;</span>
      </button>
    </div>
  );
};

export default LoadMore;
