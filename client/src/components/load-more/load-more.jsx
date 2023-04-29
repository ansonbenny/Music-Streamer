import React from "react";
import './style.scss'

const LoadMore = () => {
  return (
    <div className="load_more">
      <button>
        {/* active for animation */}
        <span>&#9679; &#9679; &#9679;</span>
      </button>
    </div>
  );
};

export default LoadMore;
