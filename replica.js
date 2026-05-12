const isObject = (v) =>
  v && typeof v === 'object' && !Array.isArray(v)


const replica = (target, ...reps) => {

  for (const src of reps) {
    for (const [key, val] of Object.entries(src)) {
      const cur = target[key]

   if (isObject(val) && isObject(cur)) {
        target[key] = replica(cur , val)
      } else {
        target[key] = val
      }
    }
  }
  return target
}

