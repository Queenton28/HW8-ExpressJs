const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes');

app.use(express.json());
app.use('/', routes);

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
