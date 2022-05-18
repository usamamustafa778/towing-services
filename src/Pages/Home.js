import React, { useContext, useEffect, useState } from "react";
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import SD1 from "../Components/SD1";
import SD2 from "../Components/SD2";
import ServiceArea from "../Components/ServiceArea";
import Services from "../Components/Services";
import Work from "../Components/Work";
import { Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div>
      <Hero />
      <Work />
      <SD1 />
      <Services />
      <SD2 />
      <CTA />

      <Routes>
        <Route path="/" element={<ServiceArea comTitle="Province List" />} />
        <Route
          path="/texas"
          element={
            <ServiceArea
              comTitle="Province Component"
              comDes="Province Component List"
            />
          }
        />
        <Route
          path="/texas/houstan"
          element={
            <ServiceArea
              comTitle="Cities Component"
              comZip="Cities Component Zips List"
            />
          }
        />
        <Route
          path="/texas/houstan/zips"
          element={<ServiceArea comTitle="Zips Component" />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default Home;
