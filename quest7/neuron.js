const neuron = (arr) => {
  const solution = {}

  for (let val of arr) {
    let { type, key, res } = manipulateStr(val)

    const cleanKey = key.toLowerCase().trim().replaceAll(' ', '_').replaceAll(/\W/g,"")

    if (solution[type] === undefined) {
      solution[type] = {}
    }


    if (solution[type][cleanKey] === undefined) {
      solution[type][cleanKey] = {
        [type.slice(0, -1)]: key.trim(),
        responses: []
      }
    }

    solution[type][cleanKey].responses.push(res.trim())
  }

  return solution
}

const manipulateStr = (str) => {

  const type = str.split(':')[0].toLowerCase()
  const key = str.split(':')[1].split('-')[0]
  const res = str.split('Response:')[1]

  return { type, key, res }
}
