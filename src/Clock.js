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
    let apiUrl = `https://timezoneapi.io/api/ip/?token=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    let pexelsApiKey =
      "563492ad6f9170000100000145a90d0d1df34715bf82ec969d716060";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${city}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers }).then(handlePexelResponse);
    console.log(apiUrl);
  }
  function handleSelect(event) {
    console.log(event);
    //setCity(event.target.value);
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
          {/*  1. Link the dropdown options with API to replace the 1st line when selected 2. Add another 3 cities and link with their real time*/}
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              onSelect={handleSelect}
            >
              Select a city
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item">Milan</a>
              <a className="dropdown-item">Another action</a>
              <a className="dropdown-item">Something else here</a>
            </div>
          </div>

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
