import git from 'simple-git';
import fs from 'fs';

class Service {

    constructor() {

    }

    isRepository(directory) {
        return fs.existsSync(directory);
    }

    status(directory) {
        return new Promise(function(resolve, reject) {
            git(directory).status((err, status) => {
                if (err) reject(err);
                resolve(status);
            });
        });
    }

    open(directory) {
        git(directory);
    }

    stage(directory, files) {
        return new Promise(function(resolve, reject) {
            git(directory).add(files, (err, status) => {
                if (err) reject(err);
                resolve(status);
            });
        });
    }
}

export default new Service();
