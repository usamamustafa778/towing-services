import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function ServiceArea({
  stName,
  cities,
  zipList,
  setApiData3,
  apiData3,
  cityShow,
}) {
  return (
    <div className="container-fluid py-5 mt-5">
      <div className="container">
        <div className="row justify-content-center align-items-center flex-column">
          <h1>Areas We Serve</h1>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <Cities
                  stParam={stName}
                  citiesList={cities}
                  apiData3={apiData3}
                  setApiData3={setApiData3}
                />

                <Zips
                  stParam={stName}
                  citiesList={cities}
                  zipList={zipList}
                  apiData3={apiData3}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceArea;

function Cities({ citiesList, stParam, setApiData3, apiData3 }) {
  const handleClick2 = async (city, stateName) => {
    try {
      alert("called api");

      const response = await axios.get(
        `http://api.3utilities.com:86/zips?state=${stateName}&city=${city}&token=MucabF_PcS_KcjU_ucabHPc`
      );
      // http://api.3utilities.com:86/zips?state=texas&city=houston&token=MucabF_PcS_KcjU_ucabHPc

      setApiData3(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("api data is", apiData3);

  return (
    <>
      {citiesList
        ? citiesList.map((city, i) => (
            <Link
              to={`/${stParam}/${city}/zipcode`}
              onClick={() => handleClick2(city, stParam)}
            >
              <li>{city}</li>
            </Link>
          ))
        : null}
    </>
  );
}

function Zips({ zipList, citiesList, stParam }) {
  return (
    <>
      {zipList
        ? zipList.map((city, i) => (
            <p>
              <li>{city}</li>
            </p>
          ))
        : null}
    </>
  );
}
