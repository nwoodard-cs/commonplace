const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(`${__dirname}/src`))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/html/index.html'));
});

const client = app.listen(8081, () => {
    console.log(`Client running on 127.0.0.1:8081`)    
})
  
  // Server close functions
  const gracefulShutdown = () => {
    console.log('\nStarting Shutdown ...')
    client.close(function() {
      console.log('Shutdown complete')
      process.exit(0)
    })
  }
  
  process.on('SIGTERM', gracefulShutdown)
  process.on('SIGINT', gracefulShutdown)
