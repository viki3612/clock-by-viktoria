import React from "react";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Result">
        <div className="row">
          <div className="col-6">
            <h2 className="city-output">{props.results.data.timezone.id}</h2>{" "}
            <p className="date-output">{props.results.data.datetime.date}</p>{" "}
          </div>
          <div className="col-6">
            <h2 className="time-output">
              {props.results.data.datetime.time} {""}
              {props.results.data.datetime.hour_am_pm}
            </h2>{" "}
            <p className="timezone-output">
              {props.results.data.datetime.offset_tzfull}
            </p>{" "}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
