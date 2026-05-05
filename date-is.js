// Checks whether a Date is valid
function isValid(date) {
  return date instanceof Date && !isNaN(date.getTime());
}

function isAfter(date1, date2) {
  if (!isValid(date1) || !isValid(date2)) return false;
  return date1.getTime() > date2.getTime();
}

function isBefore(date1, date2) {
  if (!isValid(date1) || !isValid(date2)) return false;
  return date1.getTime() < date2.getTime();
}

function isFuture(date) {
  if (!isValid(date)) return false;
  return date.getTime() > Date.now();
}

function isPast(date) {
  if (!isValid(date)) return false;
  return date.getTime() < Date.now();
}
