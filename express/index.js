const PORT    = 5000
const server  = require('./server').listen(PORT)

server.on(
  'listening',
  () => console.log(`Express listening on port ${PORT}`)
)
