import React from "react";
import "./Results.css";
import location from "./images/location.png";
import date from "./images/edit-date.png";
import clock from "./images/clock.png";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Result">
        <h2 className="time-output mb-3">
          {props.results.data.datetime.hour_24_wilz}:
          {props.results.data.datetime.minutes}{" "}
          {props.results.data.datetime.hour_am_pm}
        </h2>{" "}
        <div className="gmt mb-3">
          GMT {""}({props.results.data.datetime.offset_gmt}){" "}
        </div>
        <div className="row additional-info">
          <div className="col location-box">
            <img src={location} className="img-fluid" alt="icon" width="175" />
            <div className="location-output mt-3 mb-3">
              {props.results.data.timezone.id}
            </div>
          </div>
          <div className="col date-box">
            <img src={date} className="img-fluid" alt="icon" width="175" />
            <div className="date-output mt-3 mb-3">
              {props.results.data.datetime.day_abbr}, {""}
              {props.results.data.datetime.day}
              {""} {props.results.data.datetime.month_full} {""}
              {props.results.data.datetime.year}{" "}
            </div>
          </div>
          <div className="col timezone-box">
            <img src={clock} className="img-fluid" alt="icon" width="175" />
            <div className="timezone-output mt-3 mb-3">
              {props.results.data.datetime.offset_tzfull}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
