import React from "react";
import Button from "./Button";
import "./style.css";

function Header() {
  return (
    <div className="container">
      <div className="header p-4 row align-items-center">
        <div className="col-md-3">
          <div className="d-flex">
            <img src="/images/icons/loc.png" className="h-icon" alt="" />
            <h3 className="text-white ml-2">Los Angeles, CA</h3>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img src="/images/logo.png" className="logo" alt="" />
        </div>
        <div className="col-md-3">
          <Button/>
        </div>
      </div>
    </div>
  );
}

export default Header;
