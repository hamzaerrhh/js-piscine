function isValid(date) {
  if (date instanceof Date) {
    return !Number.isNaN(date.getTime());
  }
  if (typeof date === "number") {
    return !Number.isNaN(new Date(date).getTime());
  }
  return false;
}

function toTime(date) {
  if (date instanceof Date) return date.getTime();
  return new Date(date).getTime();
}

function isAfter(date1, date2) {
  if (!isValid(date1) || !isValid(date2)) return false;
  return toTime(date1) > toTime(date2);
}

function isBefore(date1, date2) {
  if (!isValid(date1) || !isValid(date2)) return false;
  return toTime(date1) < toTime(date2);
}

function isFuture(date) {
  if (!isValid(date)) return false;
  return toTime(date) > Date.now();
}

function isPast(date) {
  if (!isValid(date)) return false;
  return toTime(date) < Date.now();
}
