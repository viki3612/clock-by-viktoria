import React from "react";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Result">
        <div className="row">
          <div className="col-6">
            <h2 className="city-output">{props.results.data.timezone.id}</h2>{" "}
          </div>
          <div className="col-6">
            <h2 className="city-output">{props.results.data.datetime.time}</h2>{" "}
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h2 className="city-output">{props.results.data.timezone.id}</h2>{" "}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
