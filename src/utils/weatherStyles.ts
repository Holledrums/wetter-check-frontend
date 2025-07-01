export function getBackgroundByDay(isDay: number): string {
  return isDay === 1 ? "bg-white" : "bg-gray-800 text-white";
}

export function getTemperatureColor(temp: number): string {
  if (temp < 0) return "text-blue-700";
  if (temp < 10) return "text-blue-500";
  if (temp < 20) return "text-yellow-600";
  if (temp < 30) return "text-orange-600";
  return "text-red-600";
}

export function getWeatherBackground(description: string): string {
  const map: Record<string, string> = {
    Sonnig: "bg-yellow-100",
    "Teilweise bewölkt": "bg-blue-100",
    Bedeckt: "bg-gray-200",
    "Leichter Regen": "bg-blue-200",
    Regen: "bg-blue-300",
    "Starker Regen": "bg-blue-400",
    Gewitter: "bg-purple-300",
    Schnee: "bg-sky-100",
    Nebel: "bg-gray-300",
  };
  return map[description] || "bg-white";
}
