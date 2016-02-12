var express = require('express');
var app = express();
var cors = require('cors');

app.use(express.static('public'));
app.use(cors());
app.get('/api/data', function (req, res) {
  res.json({
    items: [
      {id: 1, title: 'Item 1'},
      {id: 2, title: 'Item 5'},
      {id: 3, title: 'Item 3'}
    ]
  });
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
