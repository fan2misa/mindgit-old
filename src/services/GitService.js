
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

class Service {

    constructor() {

    }

    open(directory) {
        socket.emit('open repository', directory);
    }

    stage(files) {
        socket.emit('stage', files);
    }
}

export default new Service();
