const str = "hello";
const arr = [1, 2, 1, 3];
const obj = { x: 45, y: 75, radius: 24 };
const set = new Set();
const map = new Map();

function arrToSet(arr) {
  return new Set(arr);
}

function arrToStr(arr) {
  return arr.join("");
}
function setToArr(set) {
  return Array.from(set);
}
function setToStr(set) {
  return setToArr(set).join("");
}
function strToArr(str) {
  return str.split("");
}
function strToSet(str) {
  return new Set(str.split(""));
}

function mapToObj(map) {
  return Object.fromEntries(map);
}

function objToArr(obj) {
  return Object.values(obj);
}

function objToMap(obj) {
  const map = new Map();

  for (const key in obj) {
    map.set(obj[key] !== undefined && key in obj ? key : key, obj[key]);
  }

  return map;
}
function arrToObj(arr) {
  let obj = {};
  let i = 0;
  for (let value of arr) {
    obj[i] = value;
    i++;
  }
  return obj;
}
function strToObj(str) {
  let obj = {};
  let i = 0;
  for (let value of str) {
    obj[i] = value;
    i++;
  }
  return obj;
}

function superTypeOf(value) {
  const type = Object.prototype.toString.call(value).slice(8, -1);
  console.log(Object.prototype.toString(value));
  if (type === "Null") return "null";
  if (type === "Undefined") return "undefined";

  return type;
}

// console.log(superTypeOf(new Map()));      // "Map"
// console.log(superTypeOf(new Set()));      // "Set"
// console.log(superTypeOf({}));             // "Object"
// console.log(superTypeOf("hi"));           // "String"
// console.log(superTypeOf(666));            // "Number"
// console.log(superTypeOf(NaN));            // "Number"
// console.log(superTypeOf([]));             // "Array"
// console.log(superTypeOf(null));           // "null"
// console.log(superTypeOf(undefined));      // "undefined"
console.log(superTypeOf(function () {})); // "Function"
