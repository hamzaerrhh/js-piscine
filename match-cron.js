const matchCron = (str, date) => {
  if (!(date instanceof Date)) return false;

  const parts = str.split(' ');
  if (parts.length !== 5) return false;

  const [minute, hour, dayOfMonth, month, dayOfWeek] = parts;

  const dMinute = date.getMinutes();
  const dHour = date.getHours();
  const dDay = date.getDate();
  const dMonth = date.getMonth() + 1;
  const dDayOfWeek = date.getDay() === 0 ? 7 : date.getDay();

  if (minute !== '*' && Number(minute) !== dMinute) return false;
  if (hour !== '*' && Number(hour) !== dHour) return false;
  if (dayOfMonth !== '*' && Number(dayOfMonth) !== dDay) return false;
  if (month !== '*' && Number(month) !== dMonth) return false;
  if (dayOfWeek !== '*' && Number(dayOfWeek) !== dDayOfWeek) return false;

  return true;
};