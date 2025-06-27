export function getCardinalDirection(dir: string): string {
  // Optional: du kannst auch direkt Himmelsrichtungen vom Backend liefern
  return dir;
}

export function decodePrecipitation(raw: string): string {
  const value = parseFloat(raw);
  if (value === 0) return "Kein Regen";
  if (value <= 0.2) return "Ein paar Tropfen";
  if (value <= 1) return "Leichter Regen";
  if (value <= 5) return "Regen";
  if (value <= 10) return "Starker Regen";
  return "Heftiger Regen!";
}

export function getWeatherEmoji(desc: string): string {
  const map: Record<string, string> = {
    Sonnig: "☀️",
    "Teilweise bewölkt": "🌤️",
    Bedeckt: "☁️",
    "Leichter Regen": "🌦️",
    Regen: "🌧️",
    "Starker Regen": "🌧️🌧️",
    Gewitter: "⛈️",
    Schnee: "❄️",
    Nebel: "🌫️",
    Unbekannt: "❓",
  };

  return map[desc] || "🌡️";
}
