function sunnySunday(date) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const base = new Date("0001-01-01T00:00:00Z");

  const diffInMs = date - base;
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  const index = ((diffInDays % 6) + 6) % 6; 
  return days[index];
}
