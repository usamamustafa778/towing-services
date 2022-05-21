import React, { useEffect } from "react";
import "./style.css";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function ServiceArea({ apiData2, setApiData2, loading, setLoading }) {
  const { state, city } = useParams();
  console.log("name is :", state, city);

  useEffect(() => {
    const handleClick = async () => {
      //api get call
      try {
        setLoading(true);
        const response = await axios.get(
          `http://api.3utilities.com:86/cities?state=${state.replace(
            /\-/g,
            " "
          )}&token=MucabF_PcS_KcjU_ucabHPc`
        );

        setApiData2(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    handleClick(state);
  }, []);

  const { cities } = apiData2;

  console.log(loading);

  return (
    <div className="container-fluid py-5 mt-5">
      <div className="container">
        <div className="row justify-content-center align-items-center flex-column">
          <h1>Areas We Serve</h1>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <h1>cities</h1>
                {cities
                  ? cities.map((city, i) => (
                      <Link to={`/${state}/${city.replace(/\s/g, "-")}`}>
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
