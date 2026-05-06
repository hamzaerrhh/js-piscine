function addWeek(date) {
  const epoch = new Date("0001-01-01");

  const msPerDay = 24 * 60 * 60 * 1000;

  const days = Math.floor((date.getTime() - epoch.getTime()) / msPerDay);

  const dayIndex = ((days % 14) + 14) % 14;

  const week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "secondMonday",
    "secondTuesday",
    "secondWednesday",
    "secondThursday",
    "secondFriday",
    "secondSaturday",
    "secondSunday",
  ];

  return week[dayIndex];
}
function timeTravel({ date, hour, minute, second }) {
  const newDate = new Date(date);

  newDate.setHours(hour);
  newDate.setMinutes(minute);
  newDate.setSeconds(second);

  return newDate;
}
