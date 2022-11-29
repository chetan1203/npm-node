/// Importing required module
const compose = require ("docker-compose")
const path = require ("path")
///for up the compase.yaml service up by using upAll
compose.upOne('db',{cwd: path.join(__dirname), log: true }).then(
  () => {
///print the message 
    console.log('Docker service is up')
  },
  (err) => {
    console.log('Some error in service up:', err.message)
  }
)