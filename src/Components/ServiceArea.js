import React from "react";
import "./style.css"

function ServiceArea() {
  return (
    <div className="container-fluid py-5 mt-5">
      <div className="container">
        <div className="row justify-content-center align-items-center flex-column">
          <h1>Areas We Serve</h1>
          <div className="col-md-12">
          <CityLocations
            cityName="Los Angeles County"
            location1="Agoura Hills, CA"
            location2="Altadena, CA"
            location3="Los Angeles, CA"
          />
          <CityLocations
            cityName="Mariposa County"
            location1="Fish Camp, CA"
          />
          <CityLocations
            cityName="Modoc County"
            location1="Alturas, CA"
            location2="Canby, CA"
            location3="Cedarville, CA"
          />
          </div>
        </div>
      </div>

    </div>
  );
}

export default ServiceArea;

function CityLocations({
  cityName,
  location1,
  location2,
  location3,
  location4,
}) {
  return (
    <div className="col-md-12">
      <h4 className="mt-4 mb-3"> {cityName} </h4>
      <ul className="d-flex">
        <li>{location1}</li>
        <li className="ml-5">{location2}</li>
        <li className="ml-5">{location3}</li>
      </ul>
    </div>
  );
}
