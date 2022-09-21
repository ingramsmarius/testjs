const dotenv = require('dotenv')

dotenv.config();
const express = require('express');

const app = express();

app.get('/endpoint-1', (req, res, next) => {
    res.status(200).json({
        success: true,
        data: {
            message: 'Seems like endpoint 1 works'
        }
    })
});
app.get('/endpoint-2', (req, res, next) => {
    res.status(200).json({
        success: true,
        data: {
            message: 'Seems like endpoint 2 works'
        }
    })

});

const http = require("http");

const requestListener = function (req, res) {
  res.end("Your IP Addresss is: " + req.socket.localAddress);
};

const server = http.createServer(requestListener);
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', function(req, res){
    res.send('user ' + req.headers['user-agent']);
});

//app.listen(PORT, () => console.log('server is running on this port ${PORT}'))

//app.get('/', function(req, res){
//    res.send('user ' + req.headers['user-agent']);
//});