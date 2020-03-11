var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var git = require('simple-git');

http.listen(3000, function () {
    console.log('listening on *:3000');
});

io.on('connection', function (socket) {

    socket.on('open repository', function(data) {
        git(data.directory)
    });

    socket.on('stage', function(data) {
        git(data.directory).add(data.files);
    });
});
