
import io from 'socket.io-client';
import git from 'simple-git';

class Service {

    constructor() {
        if (process.env.PLATFORM === 'web') {
            this.socket = io(process.env.SOCKET_URL);
        }
    }

    open(directory) {
        if (process.env.PLATFORM === 'web') {
            this.socket.emit('open repository', {
                directory: directory
            });
        } else {
            git(directory);
        }
    }

    stage(directory, files) {
        if (process.env.PLATFORM === 'web') {
            console.log({
                directory: directory,
                files: files
            });
            this.socket.emit('stage', {
                directory: directory,
                files: files
            });
        } else {
            git(directory).add(files);
        }
    }
}

export default new Service();
