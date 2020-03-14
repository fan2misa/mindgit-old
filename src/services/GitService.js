import git from 'simple-git';
import fs from 'fs';

class Service {

    constructor() {

    }

    isRepository(directory) {
        return fs.existsSync(directory);
    }

    status(directory) {
        git(directory).status((err, status) => {
            console.log(err, status);
        });
    }

    open(directory) {
        git(directory);
    }

    stage(directory, files) {
        git(directory).add(files);
    }
}

export default new Service();
