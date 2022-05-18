import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function ServiceArea({ states, cities }) {
  return (
    <div className="container-fluid py-5 mt-5">
      <div className="container">
        <div className="row justify-content-center align-items-center flex-column">
          <h1>Areas We Serve</h1>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                {cities ? cities.map((city, i) => <h1>{city}</h1>) : null}

                {/* <Link className="item-list" to="/texas">
                  <h1>{comTitle}</h1>
                </Link>
                <Link to="/texas/houstan">
                  <h1>{comDes}</h1>
                </Link>
                <Link to="/texas/houstan/zips">
                  <h1>{comZip}</h1>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceArea;
