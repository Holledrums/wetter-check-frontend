import React from "react";
import type { HourlyForecast } from "../types/weather";
import {
  decodePrecipitation,
  getCardinalDirection,
  getWeatherEmoji,
} from "../utils/weatherHelpers";

interface WeatherCardProps {
  forecast: HourlyForecast;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ forecast }) => {
  const localTime = new Date(forecast.time).toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="rounded-2xl shadow-md p-4 bg-white text-gray-800 w-60 text-center">
      <h3 className="text-lg font-semibold mb-2">🕒 {localTime} Uhr</h3>
      <div className="text-4xl">
        {getWeatherEmoji(forecast.weatherDescription)}
      </div>
      <p className="mt-2">{forecast.weatherDescription}</p>
      <p>🌡️ {forecast.temperature}</p>
      <p>
        💨 {forecast.windspeed} aus{" "}
        {getCardinalDirection(forecast.winddirection)}
      </p>
      <p>🌧️ {decodePrecipitation(forecast.precipitation)}</p>
    </div>
  );
};
