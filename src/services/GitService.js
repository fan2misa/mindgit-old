import git from 'simple-git';
import fs from 'fs';

class Service {

    constructor() {

    }

    isRepository(directory) {
        return fs.existsSync(directory);
    }

    fetch(directory)
    {
        git(directory).fetch();
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
        const me = this;
        return new Promise(function(resolve, reject) {
            git(directory).add(files, (err, status) => {
                if (err) reject(err);
                resolve(me.status(directory));
            });
        });
    }
}

export default new Service();
