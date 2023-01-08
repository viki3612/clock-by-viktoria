import React from "react";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Result">
        <div className="row">
          <div className="col">
            <h2 className="city-output mb-3">
              {props.results.data.timezone.id}
            </h2>
            <p className="date-output">{props.results.data.datetime.date}</p>{" "}
          </div>
          <div className="col">
            <h2 className="time-output mb-3">
              {props.results.data.datetime.time} {""}
              {props.results.data.datetime.hour_am_pm}
            </h2>{" "}
            <span className="timezone-output">
              {props.results.data.datetime.offset_tzfull}
            </span>{" "}
            GMT {""}
            <span className="timezone-output">
              ({props.results.data.datetime.offset_gmt})
            </span>{" "}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
