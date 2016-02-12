var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());

app.get('/api/data', function (req, res) {
  res.json({
    items: [
      {id: 1, title: 'Item 1'},
      {id: 2, title: 'Item 5'},
      {id: 3, title: 'Item 3'}
    ]
  });
});

app.post('/api/new', function (req, res) {
  'use strict';
  let newItem = Object.assign({}, req.body, {id: Date.now()});
  res.json(newItem);
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
