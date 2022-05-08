import React from "react";

function Services() {
  return (
    <div className="container-fluid services text-white py-5">
      <div className="container">
        <div className="row justify-content-center">
          <h1 className="py-4 text-yellow">SOME OF OUR SERVICES</h1>
        </div>
        <div className="row">
          <Service
            title="Flatbed Towing"
            des="The point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here, content
                here'."
          />
          <Service
            title="Flatbed Towing"
            des="The point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here, content
                here'."
          />
          <Service
            title="Flatbed Towing"
            des="The point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here, content
                here'."
          />
        </div>
        <div className="row mt-3">
          <Service
            title="Roadside Assistance"
            des="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'."
          />
          <Service
            title="Roadside Assistance"
            des="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'."
          />
          <Service
            title="Roadside Assistance"
            des="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'."
          />
        </div>
        <div className="row mt-3">
          <Service 
            title="Emergency 24 Hours"
            des="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'."
          />
          <Service 
            title="Emergency 24 Hours"
            des="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'."
          />
          <Service 
            title="Emergency 24 Hours"
            des="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'."
          />
        </div>
      </div>
    </div>
  );
}

export default Services;

function Service({ title, des }) {
  return (
    <div className="col-md-4 serviceBox p-3">
      <div>
        <img src="/images/icons/check-icn.png" alt="" />
      </div>
      <div>
        <h3> {title} </h3>
        <p className="ft18">{des}</p>
      </div>
    </div>
  );
}
