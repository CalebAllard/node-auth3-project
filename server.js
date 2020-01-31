const express = require('express');
const helemt = require('helmet');
const cors = require('cors');
const server = express();

const userRouter = require('./users/users-router');
const authRouter = require('./auth/auth-router');

//middleware
server.use(helemt());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);


server.get('/', (req,res) => {
    res.status(200).json({msg: ' Use "/api/{resource}" '})
});


module.exports = server;











