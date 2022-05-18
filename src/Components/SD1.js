import React from "react";
import Button from "./Button";

function SD1() {
  return (
    <div className="container py-5 mt-5">
      <div className="row justify-content-center">
        <div className="col-md d-flex flex-column align-items-center">
          <Button />
          <h1 className="py-4">TOWING SERVICE. US</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <p className="ft18">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purposeIt is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English. Many desktop publishing packages and web
            page editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their
            infancy. Various versions have evolved over the years, sometimes by
            accident, sometimes on purpose The point of using Lorem Ipsum is
            that it has a more-or-less normal distribution of letters, as
            opposed to using 'Content here, content here', making it look like
            readable English. Many desktop publishing packages and web page
            editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their
            infancy. Various versions have evolved over the years, sometimes by
            accident, sometimes on purpose The point of using Lorem Ipsum is
            that it has a more-or-less normal distribution of letters, as
            opposed to using 'Content here, content here', making it look like
            readable English. Many desktop publishing packages and web page
            editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their
            infancy. Various versions have evolved over the years, sometimes by
            accident, sometimes on purpose
          </p>
        </div>
        <div className="col-md-4">
          <div className="_map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40811.95901496711!2d-118.26267711605716!3d34.03423245399524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1645436723473!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{border:"none"}}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SD1;
