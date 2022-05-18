import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { Link } from "react-router-dom";

function ServiceArea() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    const apiDatas = async () => {
      try {
        const response = await axios.get(
          "http://api.3utilities.com:86/states?token=MucabF_PcS_KcjU_ucabHPc"
        );
        setApiData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    apiDatas();
  }, []);
  const { states } = apiData;

  return (
    <div className="container-fluid py-5 mt-5">
      <div className="container">
        <div className="row justify-content-center align-items-center flex-column">
          <h1>Areas We Serve</h1>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-3">
                {states ? (
                  states.map((state, index) => (
                    <div key={index}>
                      <li>
                        <Link className="item-list" to={`/${state}`}>
                          {state}
                        </Link>
                      </li>
                    </div>
                  ))
                ) : (
                  <p>States are empty</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceArea;
