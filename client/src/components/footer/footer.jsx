import React, { memo } from "react";
import "./style.scss";

const Footer = memo(() => {
  return (
    <div className="footer">
      <div className="inner">
        <p>
          @ Copyright {new Date().getFullYear()} Music Theme. All Rights
          Reserved
        </p>
      </div>
    </div>
  );
});

export default Footer;
