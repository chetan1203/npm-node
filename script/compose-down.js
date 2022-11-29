//Importing required module docker-compose,path
const compose = require ("docker-compose") 
const path = require ("path")
//For down the docker-compose service
compose.down({ cwd: path.join(__dirname), log: true }).then(
  () => {
//print the message for service down and remove container
    console.log('Docker-compose service down and remove the container')
  },
  (err) => {
    console.log('Some error in service down', err.message)
  }
)