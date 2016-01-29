// These routes reflect those used by the in app api

var express = require('express');

var app = express.Router();

app.get('/whoami', (req, res) => {
  res.send("You are a winner");
});

module.exports = app;
