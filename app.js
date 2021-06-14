const express = require('express');

const router = require('./routes/index');
const apiErrorHandler = require('./error/apiErrorHandler');

const app = express();

app.use(express.json());
app.use(apiErrorHandler);

app.use('/', router);

app.get('/', (req,res)=>{
  res.send('This is the home page!');
});

let PORT = 3000;
app.listen(PORT)