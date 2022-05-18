import React, { useContext, useEffect, useState } from "react";
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import SD1 from "../Components/SD1";
import SD2 from "../Components/SD2";
import ServiceArea from "../Components/ServiceArea";
import Services from "../Components/Services";
import Work from "../Components/Work";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    const apiDatas = async () => {
      try {
        const response = await axios.get(
          "http://api.3utilities.com:86/states?token=MucabF_PcS_KcjU_ucabHPc"
        );
        setApiData(response.data);
        console.log(apiData);
      } catch (error) {
        console.log(error);
      }
    };
    apiDatas();
  }, []);

  return (
    <div>
      <Hero />
      <Work />
      <SD1 />
      <Services />
      <SD2 />
      <CTA />

      <ServiceArea apiData={apiData} />
      <Footer />
    </div>
  );
}

export default Home;
