const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(express.static('server/public'));

const PORT = process.env.PORT || 5000;

const bookRouter = require( './modules/routers/home.router.js')

const pool = require('./modules/pool');

// app.use( bodyParser.urlencoded( {extended: true} ) );

app.use( bodyParser.json() );

app.use( '/home', bookRouter);



app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`);
});