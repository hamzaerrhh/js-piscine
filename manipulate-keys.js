function filterKeys(obj, callback) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => callback(key))
  )
}

function mapKeys(obj, callback) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      callback(key),
      value,
    ])
  )
}

function reduceKeys(obj, callback, initialValue) {
  const keys = Object.keys(obj)

  if (initialValue === undefined) {
    return keys.reduce(callback)
  }

  return keys.reduce(callback, initialValue)
}