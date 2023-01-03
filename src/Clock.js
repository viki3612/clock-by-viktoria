import React, { useState } from "react";
import "./Clock.css";

export default function Clock(props) {
  let [city, setCity] = useState(props.defaultCity);

  function handleSubmit(event) {
    event.preventDefault();
    // search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  return (
    <div className="Clock">
      <h1 className="Clock-title"> World Clock </h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="search"
            className="form-control"
            onChange={handleCityChange}
            placeholder="Search for a city"
          />
          <button class="btn btn-outline-secondary" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
