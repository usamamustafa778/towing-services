import React, { useContext, useEffect, useState } from "react";
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import SD1 from "../Components/SD1";
import SD2 from "../Components/SD2";
import ServiceArea from "../Components/ServiceArea";
import Services from "../Components/Services";
import Work from "../Components/Work";
import {
  Routes,
  Route,
  Link,
  Navigate,
  NavLink,
  useNavigate,
  useParams,
  createSearchParams,
} from "react-router-dom";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import ZipCodes from "../Components/ZipCodes";
import StatesandCities from "../Components/StatesandCities";

function Home() {
  const [apiData, setApiData] = useState([]);
  const [apiData2, setApiData2] = useState([]);
  const [apiData3, setApiData3] = useState([]);
  const [loading, setLoading] = useState(false);
  const [stateName, setStateName] = useState("");
  const [cityShow, setCityShow] = useState(true);
  let [color, setColor] = useState("#ffffff");

  const navigate = useNavigate();
  const params = { sort: "date", order: "newest" };

  // const goToPosts = () =>
  //   navigate({
  //     pathname: "/posts",
  //     search: `?${createSearchParams(params)}`,
  //   });

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

  // const handleClick2 = async (city, stateName) => {
  //   try {
  //     alert("called home api");
  //     setLoading(true);
  //     const response = await axios.get(
  //       `http://api.3utilities.com:86/zips?state=${stateName}&city=${city}&token=MucabF_PcS_KcjU_ucabHPc`
  //     );
  //     // http://api.3utilities.com:86/zips?state=texas&city=houston&token=MucabF_PcS_KcjU_ucabHPc

  //     setApiData3(response.data);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const { zipList, zips } = apiData3;

  return (
    <div>
      {loading && (
        <div className="spinner">
          <ClipLoader color={color} />
        </div>
      )}
      {/* <button onClick={goToPosts}>Go to Posts</button> */}

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
              cityShow={true}
              stName={stateName}
              loading={loading}
              setLoading={setLoading}
              apiData3={apiData3}
              setApiData3={setApiData3}
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
                setApiData3={setApiData3}
              />
            </>
          }
        ></Route>
        <Route
          path="/posts"
          element={
            <>
              <StatesandCities />
            </>
          }
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default Home;
