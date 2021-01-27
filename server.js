const express = require('express');
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db')

dotenv.config({path: './config/config.env'})

const bootcamps = require('./routes/bootcamps')

// Connect to database
connectDB();

const app = express();

// Body parser

app.use(express.json())

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 9000;


const server = app.listen(
    PORT, console.log(`Serving is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)

















// const http = require('http');

// const todos = [
//     {id: 1, text: 'Todo one'},
//     {id: 2, text: 'Todo two'},
//     {id: 3, text: 'Todo three'}
// ]

// const server = http.createServer ((req, res) => {
//     // res.setHeader('Content-Type', 'text/plain')
//     // res.setHeader('Content-Type', 'application/json')
//     // res.setHeader('X-Powered-By', 'Node.js')
//     const {method, url} = req;
//     let body = [];
//     req.on('data', chunk => {
//         body.push(chunk);
//     }).on('end', () => {
//         body = Buffer.concat(body).toString()
        
//         let status = 404;
//         const response = {
//             success: false,
//             data: null
//         }

//         if (method === 'GET' && url === '/todos') {
//             status = 200;
//             response.success = true;
//             response.data = todos;
//         } else if(method === 'POST' && url === '/todos') {
//             const { id, text} = JSON.parse(body)
//             todos.push({ id, text});
//             status = 200;
//             response.success = true;
//             response.data = todos;

//             if(!id || !text) {
//                 status = 400;
//                 response.error = 'please add an id and text'
//             } else {
//                 status = 200;
//                 response.success = true;
//                 response.data = todos;
//             }
            
//         }
//         res.writeHead(status, {
//             'Content-Type': 'application/json',
//             'X-Powered-By': 'Node.js'
//         });
//         console.log(req.headers.authorization)
//         res.end(JSON.stringify(response)
//         );
//     });

// });

// PORT =  10000;

// server.listen(PORT, () => console.log(`server is running on port ${PORT}` ));