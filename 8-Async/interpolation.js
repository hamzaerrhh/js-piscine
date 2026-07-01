

function interpolation({ step, start, end, callback, duration }) {
  const interval = duration / step
  const increment = (end - start) / step


  for (let i = 0; i < step; i++) {
    setTimeout(() => {
      const x = start + increment * i
      const y = interval * (i + 1)

      callback([x, y])
    }, interval * (i + 1))
  }
}