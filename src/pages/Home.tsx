import { useEffect, useState } from "react";
import axios from "axios";
import type { HourlyForecast } from "../types/weather";
import { WeatherCard } from "../components/WeatherCard";

interface WeatherResponse {
  city: string;
  forecast: HourlyForecast[];
}

export const Home = () => {
  const [forecast, setForecast] = useState<HourlyForecast[]>([]);
  const [city, setCity] = useState("Leipzig");

  useEffect(() => {
    axios
      .get<WeatherResponse>(`http://localhost:3000/weather?city=${city}`)
      .then((res) => setForecast(res.data.forecast))
      .catch((err) => console.error("Weather API error:", err));
  }, [city]);

  return (
    <main className="flex flex-col items-center gap-6 p-6 bg-blue-100 min-h-screen">
      <h1 className="text-2xl font-bold">🌤️ Weather for {city}</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {forecast.map((entry, index) => (
          <WeatherCard key={index} forecast={entry} />
        ))}
      </div>
    </main>
  );
};
