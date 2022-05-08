import React from "react";
import "./style.css";

function Work() {
    return (
        <div className="container-fluid work bg-yellow py-5 px-1">
            <h1 className="text-center">HOW TOWING SERVICE WORK</h1>
            <div className="container mt-5">
                <div className="row text-center">
                    <WorkComponent
                        img="./images/icons/ph-icn.png"
                        title="Request Help"
                        des="It is a long established fact that a reader will be distracted by the
                        readable content"
                    />
                    <WorkComponent
                        img="./images/icons/truck-icn.png"
                        title="Truck Show Up"
                        des="It is a long established fact that a reader will be distracted by the
                        readable content"
                    />
                    <WorkComponent
                        img="./images/icons/tow-icn.png"
                        title="Off You Go"
                        des="It is a long established fact that a reader will be distracted by the
                        readable content"
                    />
                </div>
            </div>
        </div>
    );
}

export default Work;

function WorkComponent({ img, title, des }) {
    return (
        <div className="col-md-4 d-flex flex-column align-items-center">
            <div className="icon-bg">
                <img src={img} alt="" />
            </div>
            <h3 className="mt-3">{title}</h3>
            <p> {des} </p>
        </div>
    );
}
