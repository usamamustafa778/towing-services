import React from "react";
import Button from "./Button";
import "./style.css"

function SD2() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md d-flex flex-column align-items-center">
          <h1 className="py-4">TOWING SERVICE. US</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-7">
          <p className="ft18">
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in
            their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose The point of using Lorem
            Ipsum is that it has a more-or-less normal distribution of letters,
            as opposed.
          </p>
        </div>
        <div className="col-md-5">
          <iframe
            width="100%"
            height="350"
            src="https://www.youtube.com/embed/wER6WVNEEwo"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
      <div className="rows mt-5 text-center">
        <div
          id="recipeCarousel"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner w-100" role="listbox">
            <div className="carousel-item row no-gutters active">
              <a className="col-3 float-left">
                <img className="img-fluid" src="/images/compress/service1.jpg" />
              </a>
              <a className="col-3 float-left">
                <img className="img-fluid" src="/images/compress/service2.jpg" />
              </a>
              <a className="col-3 float-left project_img_sm">
                <img className="img-fluid" src="/images/compress/service3.jpg" />
              </a>
              <a className="col-3 float-left">
                <img className="img-fluid" src="/images/compress/service4.jpg" />
              </a>
            </div>
            <div className="carousel-item row no-gutters">
              <a className="col-3 float-left">
                <img className="img-fluid" src="/images/compress/service1.jpg" />
              </a>
              <a className="col-3 float-left">
                <img className="img-fluid" src="/images/compress/service2.jpg" />
              </a>
              <a className="col-3 float-left project_img_sm">
                <img className="img-fluid" src="/images/compress/service3.jpg" />
              </a>
              <a className="col-3 float-left">
                <img className="img-fluid" src="/images/compress/service4.jpg" />
              </a>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#recipeCarousel"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#recipeCarousel"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SD2;
