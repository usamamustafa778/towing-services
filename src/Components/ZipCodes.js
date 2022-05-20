import React from "react";

function ZipCodes({ zips }) {
  return (
    <div className="container-fluid py-5 mt-5">
      <div className="container">
        <div className="row justify-content-center align-items-center flex-column">
          <h1>Areas We Serve</h1>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                {zips
                  ? zips.map((city, i) => (
                      <p>
                        <li>{city}</li>
                      </p>
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

export default ZipCodes;
