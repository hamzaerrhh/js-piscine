const queryServers = (serverName, q) =>
  Promise.race([
    getJSON(`/${serverName}?q=${q}`),
    getJSON(`/${serverName}_backup?q=${q}`)
  ])


  
const gougleSearch = (q) => {
  const timeout = new Promise((_, reject) =>
    
    setTimeout(() => reject(new Error('timeout')), 80)
  )

  const web = queryServers('web', q)
  const image = queryServers('image', q)
  const video = queryServers('video', q)

  return Promise.race([
    Promise.all([web, image, video]).then(([web, image, video]) => ({
      web,
      image,
      video
    })),
    timeout
  ])
}

// let getJSON = async (url) => url