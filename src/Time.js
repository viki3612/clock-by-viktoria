import React from "react";
export default function Time(props) {
  return (
    <div className="Time">
      <section>
        <h3>
          {props.time.data.datetime.time} {props.time.data.datetime.hour_am_pm}
        </h3>
        <h2 className="timezone-output">
          {props.time.data.datetime.offset_tzid}
        </h2>
        <h3>{props.time.data.datetime.offset_tzfull}</h3>
      </section>
    </div>
  );
}
