export function getCardinalDirection(dir: string): string {
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
    "Klarer Himmel": "☀️",
    "Überwiegend klar": "🌤️",
    "Teilweise bewölkt": "🌤️",
    Bedeckt: "☁️",
    Nebel: "🌫️",
    "Reifiger Nebel": "🌫️",
    "Leichter Nieselregen": "🌦️",
    "Mäßiger Nieselregen": "🌧️",
    "Starker Nieselregen": "🌧️",
    "Leichter gefrierender Nieselregen": "❄️🌧️",
    "Starker gefrierender Nieselregen": "❄️🌧️",
    "Leichter Regen": "🌦️",
    "Mäßiger Regen": "🌧️",
    "Starker Regen": "🌧️🌧️",
    "Leichter gefrierender Regen": "❄️🌧️",
    "Starker gefrierender Regen": "❄️🌧️",
    "Leichter Schneefall": "🌨️",
    "Mäßiger Schneefall": "🌨️",
    "Starker Schneefall": "❄️❄️",
    Schneekörner: "❄️",
    "Leichte Regenschauer": "🌦️",
    "Mäßige Regenschauer": "🌧️",
    "Heftige Regenschauer": "🌧️🌧️",
    "Leichte Schneeschauer": "🌨️",
    "Starke Schneeschauer": "❄️❄️",
    Gewitter: "⛈️",
    "Gewitter mit leichtem Hagel": "⛈️🌨️",
    "Gewitter mit starkem Hagel": "⛈️❄️",
    Unbekannt: "❓",
  };

  return map[desc] || "🌡️";
}
