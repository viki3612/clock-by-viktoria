import React from "react";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Result">
        <h2 className="time-output">
          {props.results.data.datetime.hour_24_wilz}:
          {props.results.data.datetime.minutes}{" "}
          {props.results.data.datetime.hour_am_pm}
        </h2>{" "}
        <div className="gmt">
          GMT {""}({props.results.data.datetime.offset_gmt}){" "}
        </div>
        <div className="row additional-info">
          <div className="col location-box">
            <img src="" className="location-icon" alt="icon" width="50" />
            <div className="location-output">
              {props.results.data.timezone.id}
            </div>
          </div>
          <div className="col date-box">
            <img src="" className="location-icon" alt="icon" width="50" />
            <div className="date-output">
              {props.results.data.datetime.day_abbr}, {""}
              {props.results.data.datetime.day}
              {""} {props.results.data.datetime.month_full} {""}
              {props.results.data.datetime.year}{" "}
            </div>
          </div>
          <div className="col timezone-box">
            <img src="" className="location-icon" alt="icon" width="50" />
            <div className="timezone-output">
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
