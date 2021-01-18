const express = require('express');
const dotenv = require('dotenv')  
const morgan = require('morgan')

const bootcamps = require('./routes/bootcamps')
// Load env vars

dotenv.config({path: './config/config.env' });
const app = express()


// Dev Logging middleware;
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

const PORT = process.env.PORT || 10000;

app.use('/api/v1/bootcamps', bootcamps)

app.listen(
    PORT, console.log(`server running in ${process.env.NODE_ENV}mode on port ${PORT}`)
    );