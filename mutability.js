const person = {
  name: 'Rick',
  age: 77,
  country: 'US',
}
const clone1={...person}
const clone2={...person}
const samePerson =person
person.age++;
person.country="FR"

console.log("person:",person)
console.log("clone1:",clone1)
console.log("clone2:",clone2)
console.log("samePerson:",samePerson)