import React from "react";
import "./Results.css";
import location from "./images/location.png";
import date from "./images/edit-date.png";
import clock from "./images/clock.png";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Result">
        <h2 className="time-info">{props.results.time_12}</h2>
        <hr></hr>
        <div className="row other-information">
          <div className="col ">
            <img
              src={location}
              className="img-fluid-location"
              alt="icon"
              width="100"
            />
            <div className="location-output mb-3">{props.results.timezone}</div>
          </div>
          <div className="col">
            <img src={date} className="img-fluid-date" alt="icon" width="100" />

            <div className="date-output mb-3">{props.results.date}</div>
          </div>
          <div className="col">
            <img
              src={clock}
              className="img-fluid-clock"
              alt="icon"
              width="100"
            />

            <div className="gmt mb-3">
              {" "}
              GMT : {""}
              {props.results.timezone_offset} hours
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
