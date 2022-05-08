import React from "react";
import "./style.css"

function Button() {
  return (
    <a href="tel:310-594-5229" className="btn-yellow d-flex align-items-center">
      <img src="/images/icons/ph-sm.png" className="h-icon" alt="" />
      <div className="ml-3 d-flex flex-column align-items-start">
        <p>Click To Call</p>
        <h5 style={{ marginTop: -19 }}>310-594-5229</h5>
      </div>
    </a>
  );
}

export default Button;
