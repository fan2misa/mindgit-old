var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var git = require('simple-git');

http.listen(3000, function () {
    console.log('listening on *:3000');
});

io.on('connection', function (socket) {

    socket.on('open repository', function(directory) {
        git(directory)
    });

    socket.on('stage', function(directory, files) {
        if (null !== repository) {
            git(directory).add(files);
        }
    });
});
