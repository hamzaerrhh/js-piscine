const msperday = 24 * 60 * 60 * 1000;

const dayOfTheYear = (date) => {
  if (!(date instanceof Date)) return 0;

  const year = date.getUTCFullYear();

  const start = Date.UTC(year, 0, 1);
  const current = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate()
  );

  const diff = current - start;

  return Math.floor(diff / msperday) + 1;
};
console.log(dayOfTheYear(new Date('0001-01-01')))// === 1
console.log(dayOfTheYear(new Date('1664-08-09')))// === 222
console.log(dayOfTheYear(new Date('1600-12-31'))) //=== 366
console.log(dayOfTheYear(new Date('2020-06-22'))) //=== 174
console.log(dayOfTheYear(new Date('2048-12-08')))// === 343
console.log(dayOfTheYear(new Date('2048-11-08')))// === 313