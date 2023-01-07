//import img from "./img.svg";
import "./App.css";
import Clock from "./Clock";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Clock defaultCity="Europe/London" />
        </main>
        <p className="App-footer m-4">
          Project is coded by{" "}
          <a
            href="https://viktoria-nikolova-portfolio.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Viktoria Nikolova
          </a>{" "}
          & is open sourced on{" "}
          <a
            href="https://github.com/viki3612/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Github
          </a>
          ✌️
        </p>
      </div>
    </div>
  );
}
