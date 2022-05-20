import React, { useContext, useEffect, useState } from "react";
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import SD1 from "../Components/SD1";
import SD2 from "../Components/SD2";
import ServiceArea from "../Components/ServiceArea";
import Services from "../Components/Services";
import Work from "../Components/Work";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

function Home() {
  const [apiData, setApiData] = useState([]);
  const [apiData2, setApiData2] = useState([]);
  const [apiData3, setApiData3] = useState([]);
  const [loading, setLoading] = useState(false);
  const [stateName, setStateName] = useState("");

  let [color, setColor] = useState("#ffffff");
  useEffect(() => {
    const apiDatas = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://api.3utilities.com:86/states?token=MucabF_PcS_KcjU_ucabHPc"
        );
        setApiData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    apiDatas();
  }, []);

  const handleClick = async (state) => {
    console.log(stateName);
    alert(state);

    //api get call
    try {
      setLoading(true);
      const response = await axios.get(
        `http://api.3utilities.com:86/cities?state=${state}&token=MucabF_PcS_KcjU_ucabHPc`
      );

      setApiData2(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const { cities } = apiData2;
  const { states } = apiData;
  const { zips } = apiData3;

  const handleClick2 = async (city, stateName) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://api.3utilities.com:86/zips?state=${stateName}&city=${city}&token=MucabF_PcS_KcjU_ucabHPc`
      );
      // http://api.3utilities.com:86/zips?state=texas&city=houston&token=MucabF_PcS_KcjU_ucabHPc

      setApiData3(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("api", cities, states);

  return (
    <div>
      {loading && (
        <div className="spinner">
          <ClipLoader color={color} />
        </div>
      )}
      <Hero stName={stateName} />
      <Work />
      <SD1 />
      <Services />
      <SD2 />
      <CTA />
      <Routes>
        <Route
          path="/"
          element={
            <div className="container py-5 mt-5">
              {states
                ? states.map((state, i) => (
                    <Link
                      key={i}
                      onClick={() => {
                        handleClick(state);
                        setStateName(state);
                      }}
                      to={`/${state.replace(/\s/g, "-")}`}
                    >
                      <li>{state}</li>
                    </Link>
                  ))
                : null}
            </div>
          }
        />

        <Route
          path="/:state"
          element={
            <ServiceArea 
              stName={stateName} 
              cities={cities} 
            />
          }
        ></Route>

        <Route
          path="/:state/:city"
          element={
            <ServiceArea
              stName={stateName}
              cities={cities}
              zipList={zips}
              onClick={() => handleClick2(cities, stateName)}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default Home;
