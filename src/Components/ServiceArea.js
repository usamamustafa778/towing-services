import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function ServiceArea({
  stName,
  cities,
  setApiData3,
  apiData3,
  loading,
  setLoading,
}) {
  const handleClick2 = async (city, stName) => {
    try {
      alert("called api");
      setLoading(true);
      const response = await axios.get(
        `http://api.3utilities.com:86/zips?state=${stName}&city=${city}&token=MucabF_PcS_KcjU_ucabHPc`
      );
      // http://api.3utilities.com:86/zips?state=texas&city=houston&token=MucabF_PcS_KcjU_ucabHPc

      setApiData3(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(loading);

  return (
    <div className="container-fluid py-5 mt-5">
      <div className="container">
        <div className="row justify-content-center align-items-center flex-column">
          <h1>Areas We Serve</h1>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                {cities
                  ? cities.map((city, i) => (
                      <Link
                        to={`/${stName}/${city}/zipcode`}
                        onClick={() => handleClick2(city, stName)}
                      >
                        <li>{city}</li>
                      </Link>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceArea;
