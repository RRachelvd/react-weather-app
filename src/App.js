import "./App.css";
import Form from "./Form.js";
import Forecast from "./Forecast.js";
import WeatherApp from "./WeatherApp";

export default function App() {
  return (
    <div className="weather-app-container">
      <header>
        <Form />
      </header>
      <main>
        <WeatherApp />
        <Forecast />
        <div className="weather-forecast" id="forecast"></div>
      </main>

      <footer>
        <div>
          Coded by {` `}
          <a href="https://github.com/RRachelvd" target="_blank">
            Rachèl van Dijkhorst
          </a>
          , open-sourced on {` `}
          <a href="https://github.com/RRachelvd/my-weather-app" target="_blank">
            Github
          </a>
          {` `}
          and hosted on {` `}
          <a
            href="https://weather-application-from-rachel.netlify.app/"
            target="_blank"
          >
            Netlify
          </a>
        </div>
      </footer>
      <script src="script.js"></script>
    </div>
  );
}
