const obj = {
  prop: 42,
};
const str ="mm"
str = "ll"
Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop,str);
// Expected output: 42