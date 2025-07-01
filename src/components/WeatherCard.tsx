import React from "react";
import type { HourlyForecast } from "../types/weather";
import {
  decodePrecipitation,
  getCardinalDirection,
  getWeatherEmoji,
} from "../utils/weatherHelpers";
import {
  getBackgroundByDay,
  getTemperatureColor,
  getWeatherBackground,
} from "../utils/weatherStyles";

interface WeatherCardProps {
  forecast: HourlyForecast;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ forecast }) => {
  const bgDay = getBackgroundByDay(forecast.isDay);
  const bgWeather = getWeatherBackground(forecast.weatherDescription);
  const tempColor = getTemperatureColor(parseFloat(forecast.temperature));
  const localTime = new Date(forecast.time).toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      className={`rounded-2xl shadow-lg p-5 w-64 text-center border hover:shadow-xl transition-all ${bgDay} ${bgWeather}`}>
      <h3 className="text-xl font-bold mb-2 text-blue-800">
        🕒 {localTime} Uhr
      </h3>

      <p className="text-xl flex items-center justify-center gap-2 mb-2">
        <span>{getWeatherEmoji(forecast.weatherDescription)} </span>
        <span>{forecast.weatherDescription}</span>
      </p>

      <p className={`text-lg ${tempColor}`}>🌡️ {forecast.temperature}</p>
      <p className="text-lg">
        💨 {forecast.windspeed} aus{" "}
        {getCardinalDirection(forecast.winddirection)}
      </p>
      <p className="text-lg">
        🌧️ {decodePrecipitation(forecast.precipitation)}
      </p>
    </div>
  );
};
