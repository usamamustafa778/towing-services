import React from "react";
import Button from "./Button";
import "./style.css";

function Footer() {
  return (
    <div className="container-fluid mt-5">
      <div className="row related-tags py-5 relatedTags">
        <div className="container bg-light p-4">
          <div className="row justify-content-center">
            <h1>Related Tags</h1>
            <div className="col-md-12">
              <ul className="d-flex">
                <li>Test Alturas, CA</li>
                <li className="ml-5">Test2 Alturas, CA</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row bg-dark text-white">
        <div className="container pb-5 mt-4">
          <div className="row">
            <div className="col-md-4 p-2 mt-4">
              <h1>5 Star Review!</h1>
              <div className="d-flex py-2">
                <img src="/images/icons/starY.png" className="star" alt="" />
                <img src="/images/icons/starY.png" className="star" alt="" />
                <img src="/images/icons/starY.png" className="star" alt="" />
                <img src="/images/icons/starY.png" className="star" alt="" />
                <img src="/images/icons/starY.png" className="star" alt="" />
              </div>
              <p>
              Everyday Locksmith provides a 24/7 locksmith services. We are licensed and insured, and all of our locksmiths are up to date with the latest security technology.
              </p>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-4 p-2 mt-4">
                <h1>We Accept All Major credit Cards!</h1>
                <img src="/images/pay-cards.png" className="w-100 mt-2" alt="" />
            </div>
            <div className="col-md-3 p-2 mt-4">
                <Button/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
