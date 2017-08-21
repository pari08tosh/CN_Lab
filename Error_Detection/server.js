//jshint esversion:6, node: true
"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.post('/check1dParity', (req, res, next) => {
  let parityString = req.body.parityString;
  let parityBit = req.body.parityBit;
  let bitcount=0;
  for (let i = 0; i < parityString.length; i++) {
    if (parityString[i] === '1') {
      ++bitcount;
    }
  }
  if (bitcount%2 === 0) {
    if (parityBit === '0') {
      res.json({
        success: true,
        msg: `Parity is correct`,
      });
    } else {
      res.json({
        success: false,
        msg: `Error: Parity does not match`,
      });
    }
  } else {
    if (parityBit === '1') {
      res.json({
        success: true,
        msg: `Parity is correct`,
      });
    } else {
      res.json({
        success: false,
        msg: `Error: Parity does not match`,
      });
    }
  }
});

app.post('/check2dParity', (req, res, next) => {
  let parityString = req.body.parityString;
  let parityBit = req.body.parityBit;
  let bitcount=0;
  let newTempString = "";
  let finalString = [];
  let finalParityString = "";
  let k=0;
  for (let i = 0; i < 4; i++)
  {
    bitcount = 0;
    newTempString = "";
    for (let j = 0; j < 8; j++) {
      if (parityString[k] === '1') {
        bitcount++;
      }
      newTempString+=parityString[k];
      k++;
    }
    if (bitcount%2 === 0) {
      newTempString+='0';
    } else {
      newTempString+='1';
    }
    finalString.push(newTempString);
  }

  for(let i = 0; i < 9; i++) {
    let bitcount=0;
    for (let j = 0; j < 4; j++) {
      if (finalString[j][i] === '1') {
        ++bitcount;
      }
    }
    if (bitcount%2 === 0) {
      finalParityString+='0';
    } else {
      finalParityString+='1';
    }
  }

  if (finalParityString === parityBit) {
    res.json({
      success: true,
      msg: `Parity is correct`,
    });
  } else {
    res.json({
      success: false,
      msg: `Error: Parity does not match, should be ${finalParityString}`,
    });
  }
});

app.post('/checkChecksumParity', (req, res, next) => {
  let parityString = req.body.parityString;
  let parityBit = req.body.parityBit;
  console.log(parityBit);
});


app.listen(3000, ()=>{
  console.log(`Server started on port 3000`);
});
