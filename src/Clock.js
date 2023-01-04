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
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function search() {
    let apiKey = "aegZsziJuzKzClDmemJB";
    let apiUrl = `https://timezoneapi.io/api/ip/?token=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    let pexelsApiKey =
      "563492ad6f91700001000001ca29f16adf9545ae98988280416b1057";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${city}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers }).then(handlePexelResponse);
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function handleResponse(response) {
    setResult(response.data);
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
                onChange={handleCityChange}
                placeholder="Search for a city"
              />
              <button className="btn btn-outline-secondary" type="submit">
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
