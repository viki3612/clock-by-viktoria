import React from "react";
import Time from "./Time";
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

          <h2 className="city-output">{props.results.data.city}</h2>
          <div className="time">
            {props.results.time.map(function (time, index) {
              return (
                <div key={index}>
                  <Time time={time} />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
