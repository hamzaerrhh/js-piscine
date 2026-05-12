export const flags = (obj = {}) => {
  const keys = Object.keys(obj)

  const hasHelp = keys.includes("help")

  const flagKeys = keys.filter(k => k !== "help")

  const alias = { h: "help" }

  for (const key of flagKeys) {
    alias[key[0]] = key
  }

  let targetKeys = flagKeys

  if (hasHelp  && obj.help.length > 0) {
    targetKeys = obj.help
  }

  const description = targetKeys
    .map(key => `-${key[0]}, --${key}: ${obj[key]}`)
    .join('\n')

  return {
    alias,
    description
  }
}
const test={
  multiply: 'multiply the values',
  divide: 'divides the values',
  addition:"add two value",
  help:["divide","addition"]
}
console.log(flags(test))
