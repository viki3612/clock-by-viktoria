import React from "react";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Result">
        <section>
          <div className="row">
            <div className="col-6"> Location </div>
            <div className="col-6"> Time </div>
          </div>
        </section>
        <div className="row">
          <div className="col-6">
            <h2 className="city-output">{props.results.data.city}</h2>
          </div>
          <div className="col-6">
            <h3>
              {props.results.data.datetime.time}{" "}
              {props.results.data.datetime.hour_am_pm}
            </h3>
          </div>
        </div>
        <section>
          <div className="row">
            <div className="col-6">
              <h2 className="timezone-output">
                {props.results.data.datetime.offset_tzid}
              </h2>
            </div>
            <div className="col-6">
              <h3>{props.results.data.datetime.offset_tzfull}</h3>
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
