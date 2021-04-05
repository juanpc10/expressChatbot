const express = require('express');
const morgan = require('morgan');
const router = require('./routes/router');

const PORT = 3000;
const app = express();

app.use(morgan('tiny'))
app.use(express.static('public'));
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`app running at: http://localhost:${PORT}`)
})