
import git from 'simple-git';

class Service {

    constructor() {

    }

    open(directory) {
        git(directory);
    }

    stage(directory, files) {
        git(directory).add(files);
    }
}

export default new Service();
