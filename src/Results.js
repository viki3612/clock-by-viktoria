import React from "react";
import "./Results.css";
import location from "./images/location.png";
import date from "./images/edit-date.png";
import clock from "./images/clock.png";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Result">
        <div className="time-info">
          <h2 className="main-output">
            {props.results.data.datetime.hour_24_wilz}:
            {props.results.data.datetime.minutes}{" "}
            {props.results.data.datetime.hour_am_pm}
          </h2>{" "}
        </div>
        <hr></hr>
        <div className="row additional-info">
          <div className="col location-box">
            <img src={location} className="img-fluid" alt="icon" width="100" />
            <div className="location-output mb-3">
              {props.results.data.timezone.id}
            </div>
            <div className="country-name">
              {props.results.data.timezone.country_name}
            </div>
          </div>
          <div className="col date-box">
            <img src={date} className="img-fluid" alt="icon" width="100" />
            <div className="date-output mb-3">
              {props.results.data.datetime.day_abbr}
            </div>
            <div className="date">
              {props.results.data.datetime.day}
              {""} {props.results.data.datetime.month_full} {""}
              {props.results.data.datetime.year}{" "}
            </div>
          </div>
          <div className="col timezone-box">
            <img src={clock} className="img-fluid" alt="icon" width="100" />
            <div className="timezone-output mb-3">
              {props.results.data.datetime.offset_tzfull}
            </div>
            <div className="gmt">
              GMT {""}({props.results.data.datetime.offset_gmt}){" "}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
