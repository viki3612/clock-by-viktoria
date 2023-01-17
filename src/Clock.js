import React, { useState } from "react";
import "./Clock.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Clock(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function search() {
    let apiKey = "aegZsziJuzKzClDmemJB";
    let apiUrl = `https://timezoneapi.io/api/ip/?&token=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    let pexelsApiKey =
      "563492ad6f9170000100000145a90d0d1df34715bf82ec969d716060";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${city}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers }).then(handlePexelResponse);
  }
  function timezone() {
    /*https://github.com/kevinroberts/city-timezones*/
    var cityTimezones = require("city-timezones");
    const cityLookup = cityTimezones.lookupViaCity(`${city}`);
    const timezone = cityLookup[0].timezone;
    let apiKey = "aegZsziJuzKzClDmemJB";
    let apiTimezoneUrl = `https://timezoneapi.io/api/timezone/?timezone=${timezone}&token=${apiKey}`;
    axios.get(apiTimezoneUrl).then(handleResponse);
    let pexelsApiKey =
      "563492ad6f9170000100000145a90d0d1df34715bf82ec969d716060";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${city}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers }).then(handlePexelResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    timezone();
  }
  function handlecityChange(event) {
    setCity(event.target.value);
  }
  function handleResponse(response) {
    setResult(response.data);
    //console.log(response.data);
  }

  function handlePexelResponse(response) {
    setPhotos(response.data.photos);
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
                list="datalistOptions"
                onChange={handlecityChange}
                placeholder="Type a city"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </div>
          </form>
          {/*component name (Results) property name (results) = {property value set in the state}*/}
          <Results results={result} />
          <Photos photos={photos} />
        </section>
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
