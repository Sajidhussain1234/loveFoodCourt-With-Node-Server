// first of all install express server then include it your project
// command is: npm install express --save
const express = require('express');
const app = express(); 

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
  
  app.listen(6000, () => {
    console.log('Server started on port 6000');
  });