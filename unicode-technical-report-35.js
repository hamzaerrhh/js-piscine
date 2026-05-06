function format(date, formatStr) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const weekday = date.getDay();

  const hours24 = date.getHours();
  const hours12 = hours24 % 12 || 12;

  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const isPM = hours24 >= 12;

  const pad = (n, len = 2) => String(n).padStart(len, "0");
  const abs = (n) => Math.abs(n);

  const isBC = year <= 0;

  const map = {
    yyyy: pad(abs(year), 4),
    y: abs(year),

    G: isBC ? "BC" : "AD",
    GGGG: isBC ? "Before Christ" : "Anno Domini",

    M: month + 1,
    MM: pad(month + 1),
    MMM: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][month],
    MMMM: ["January","February","March","April","May","June","July","August","September","October","November","December"][month],

    d: day,
    dd: pad(day),

    E: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][weekday],
    EEEE: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][weekday],

    h: hours12,
    hh: pad(hours12),

    H: hours24,
    HH: pad(hours24),

    m: minutes,
    mm: pad(minutes),

    s: seconds,
    ss: pad(seconds),

    a: isPM ? "PM" : "AM"
  };

  const tokenRegex = /yyyy|GGGG|MMMM|EEEE|MMM|MM|dd|HH|hh|mm|ss|y|G|M|d|E|h|H|m|s|a/g;

  const applyTokens = (str) =>
    str.replace(tokenRegex, (match) => map[match]);

  return formatStr.replace(/\[([^\]]*)]|\<([^>]*)>/g, (_, square, angle) => {
    if (square !== undefined) {
      return `[${applyTokens(square)}]`;
    }
    if (angle !== undefined) {
      return `<${applyTokens(angle)}>`;
    }
  }).replace(tokenRegex, (match) => map[match]);
}