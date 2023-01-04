import React from "react";

export default function Results(props) {
  return (
    <div className="Result">
      <h2 className="result-output">{props.requested_location}</h2>
    </div>
  );
}
