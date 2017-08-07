//jshint esversion:6, node: true
"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.post('/getIp', (req, res, next) => {
  http.get(req.body.websiteName, function(result) {
      let ip = String(result.connection.remoteAddress);
      res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
          <link rel="stylesheet" href="/style.css">
          <title>IP</title>
        </head>
          <h1 style="text-align: center">Ip address finder</h1>
          <h3 style="text-align: center">Ip address of ${req.body.websiteName} = ${ip}</h3>
        <body>
        </body>
        </html>
        `);
  });
});


app.listen(3000, ()=>{
  console.log(`Server started on port 3000`);
});
