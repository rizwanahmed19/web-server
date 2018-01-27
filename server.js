const express = require('express');

const app = express();
const PORT = 3000;

const middleware = require('./middleware');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, (req, res) => {
  res.send('About us.');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
  console.log('Express server started on port ' + PORT);
});