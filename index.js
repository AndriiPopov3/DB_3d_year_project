const express = require('express')
//const cors = require("cors");
// const jwt = require('jsonwebtoken');
require('./app/db.config');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes/index');
routes(app);

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
const port = 3050

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})