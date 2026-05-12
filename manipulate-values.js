function filterValues(obj, callback) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key,val]) => callback(val))
  )
}

function mapValues(obj, callback) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key,callback(value),
    ])
  )
}

function reduceValues(obj, callback, initialValue) {
  const keys = Object.values(obj)

  if (initialValue === undefined) {
    return keys.reduce(callback)
  }

  return keys.reduce(callback, initialValue)
}