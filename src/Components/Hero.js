import React from "react";
import Header from "./Header";
import "./style.css";
import { useParams } from "react-router-dom";

function Hero() {

  const { state } = useParams();

  return (
    <div className="hero contianer-fluid">
      <Header />
      <div className="container hero-container d-flex flex-column align-items-center text-center text-white py-5 mt-5">
        <h2>Towing Service</h2>
        <h1 className="mb-4 location-param">{ state }</h1>
        <Button/>
        <div className="divider-line mt-4 mb-1"></div>
        <h4>24 HOUR EMERGENCY SERVICE & ROADSIDE ASSISTANCE</h4>
      </div>
    </div>
  );
}

export default Hero;

function Button(){
    return(
        <a className="p-3 btn-yellow d-flex align-items-center">
          <img src="/images/icons/ph-sm.png" className="ml-3 h-icon" alt="" />
          <div className="ml-3 d-flex flex-column align-items-start">
            <h6>Click To Call</h6>
            <h4 style={{ marginTop: -10 }}>310-594-5229</h4>
          </div>
        </a>
    );
}