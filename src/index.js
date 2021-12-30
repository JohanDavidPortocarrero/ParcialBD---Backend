
const express = require('express');
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Router
app.use(require('./routers/index'));

app.listen(4000);
console.log('Servidor en puerto 4000')

