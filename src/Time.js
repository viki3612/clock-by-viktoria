import React from "react";

export default function Time(props) {
  return (
    <div className="Time">
      <div className="row">
        <div className="col-6">
          {" "}
          <h2 className="time">{props.time.data.datetime.time}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          {" "}
          <p className="date">{props.time.data.datetime.date}</p>{" "}
        </div>
        <div className="col-6">
          {" "}
          <p className="timezone"> {props.time.datetime.offset_tzfull} </p>{" "}
        </div>
      </div>
    </div>
  );
}
