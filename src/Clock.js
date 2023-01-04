import React, { useState } from "react";
import "./Clock.css";
import axios from "axios";
import Results from "./Results";

export default function Clock(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "b9907fcf20d446c3b2965691d5083aab";
    let apiUrl = `https://timezone.abstractapi.com/v1/current_time/?api_key=${apiKey}&location=${city}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleResponse(response) {
    console.log(response.data);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Clock">
        <section>
          <h1 className="Clock-title">
            <i className="fa-solid fa-earth-americas"></i> World Clock{" "}
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="search"
                className="form-control"
                onChange={handleCityChange}
                placeholder="Search for a city"
              />
              <button className="btn btn-outline-secondary" type="submit">
                Search
              </button>
            </div>
          </form>
        </section>

        {/*component name (Results) property name (results) = {property value set in the state}*/}
        <Results results={result} />
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
