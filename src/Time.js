import React from "react";
export default function Time(props) {
  if (props.time) {
    return (
      <div className="Time">
        <div className="row">
          <div className="col">
            <h3>
              {props.time.data.datetime.time}{" "}
              {props.time.data.datetime.hour_am_pm}
            </h3>
          </div>
          <div className="col">
            <h2 className="timezone-output">
              {props.time.data.datetime.offset_tzid}
            </h2>
            <h3>{props.time.data.datetime.offset_tzfull}</h3>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
