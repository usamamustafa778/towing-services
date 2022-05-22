import React, { useContext, useEffect, useState } from "react";
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import SD1 from "../Components/SD1";
import SD2 from "../Components/SD2";
import ServiceArea from "../Components/ServiceArea";
import Services from "../Components/Services";
import Work from "../Components/Work";
import { Routes, Route, Link, useParams } from "react-router-dom";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import ZipCodes from "../Components/ZipCodes";
import DocumentMeta from "react-document-meta";

function Home() {
  
  const [apiData, setApiData] = useState([]);
  const [apiData2, setApiData2] = useState([]);
  const [apiData3, setApiData3] = useState([]);
  const [loading, setLoading] = useState(false);
  const [stateName, setStateName] = useState("");
  let [color, setColor] = useState("#ffffff");

  const { state, city } = useParams();

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

  const { states } = apiData;
  const { zips } = apiData3;

  var title = `Towing USA - ${stateName}`;
  var description = `We are in - ${stateName}`;

  const meta = {
    title: title,
    description: description,
    canonical: "http://example.com/path/to/page",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "react,meta,document,html,tags",
      },
    },
  };

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
      <DocumentMeta {...meta} />
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
        />{" "}
        <Route
          path="/:state"
          element={
            <ServiceArea
              loading={loading}
              setLoading={setLoading}
              setApiData2={setApiData2}
              apiData2={apiData2}
            />
          }
        ></Route>
        <Route
          path="/:state/:city"
          element={
            <>
              <ZipCodes
                zips={zips}
                loading={loading}
                setLoading={setLoading}
                apiData3={apiData3}
                setApiData3={setApiData3}
              />
            </>
          }
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default Home;
