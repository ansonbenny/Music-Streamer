import React from "react";
import "./style.scss";

const FIlterSearch = () => {
  return (
    <div className="search-filter">
      <button className="active">All</button>
      <button>Songs</button>
      <button>Artist</button>
    </div>
  );
};

export default FIlterSearch;
