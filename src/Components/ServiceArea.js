import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function ServiceArea({ stName, cities, zipList }) {
  return (
    <div className="container-fluid py-5 mt-5">
      <div className="container">
        <div className="row justify-content-center align-items-center flex-column">
          <h1>Areas We Serve</h1>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <Cities stParam={stName} citiesList={cities} />
                <Zips stParam={stName} citiesList={cities} zipList={zipList} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceArea;

function Cities({citiesList, stParam}) {
  return (
    <>
      {citiesList
        ? citiesList.map((city, i) => (
            <Link to={`/${stParam}/${city}`}>
              <li>{city}</li>
            </Link>
          ))
        : null}
    </>
  );
}

function Zips({zipList, citiesList, stParam}){
  return (
    <>
      {zipList
        ? zipList.map((city, i) => (
            <p to={`/${stParam}/${city}`}>
              <li>{city}</li>
            </p>
          ))  
        : null}
    </>
  )
}
