import git from 'simple-git';
import fs from 'fs';
import {exec} from "child_process";
import GitLogUtil from "../utils/GitLogUtil";

class GitService {

    isRepository(directory) {
        return fs.existsSync(directory);
    }

    getUserName(directory) {
        return this.getConfig(directory, 'user.name');
    }

    getUserEmail(directory) {
        return this.getConfig(directory, 'user.email');
    }

    getConfig(directory, configname) {
        return new Promise(function(resolve, reject) {
            let cmd = `git config ${configname}`;
            exec(`cd ${directory} && ${cmd}`, (err, stdout) => {
                if (err) reject(err);
                resolve(stdout);
            });
        });
    }

    log(directory, skip, maxCount) {
        skip = skip || 0;
        maxCount = maxCount || 100;

        return new Promise(function(resolve, reject) {
            let cmd = `git log --all --skip=${skip} --max-count=${maxCount} --pretty=format:"${GitLogUtil.prettyFormat}" --decorate=full`;
            exec(`cd ${directory} && ${cmd}`, (err, stdout) => {
                if (err) reject(err);
                resolve(GitLogUtil.transform(stdout));
            });
        });
    }

    countCommits(directory) {
        return new Promise(function(resolve, reject) {
            let cmd = `git rev-list --count --all`;
            exec(`cd ${directory} && ${cmd}`, (err, stdout) => {
                if (err) reject(err);
                resolve(parseInt(stdout));
            });
        });
    }

    countCommitsGroupByAuthor(directory) {
        return new Promise(function(resolve, reject) {
            let cmd = `git shortlog -s`;
            console.log('shortlog start');
            exec(`cd ${directory} && ${cmd}`, (err, stdout) => {
                console.log('shortlog end', err, stdout);
                if (err) reject(err);
                resolve(stdout);
            });
        });
    }

    fetch(directory) {
        return new Promise(function(resolve, reject) {
            git(directory).fetch((err, fetchSummary) => {
                if (err) reject(err);
                resolve(fetchSummary);
            });
        });
    }

    getRemotes(directory) {
        const me = this;
        return new Promise(function(resolve, reject) {
            git(directory).getRemotes((err, data) => {
                if (err) reject(err);
                resolve(data);
            });
        });
    }

    pull(directory) {
        return new Promise(function(resolve, reject) {
            git(directory).pull((err, data) => {
                if (err) reject(err);
                resolve(data);
            });
        });
    }

    push(directory, remote, branch, options) {
        const me = this;
        return new Promise(function(resolve, reject) {
            git(directory).push(['push', remote, branch.name, ...options], options, (err, data) => {
                if (err) reject(err);
                resolve();
            });
        });
    }

    status(directory) {
        return new Promise(function(resolve, reject) {
            git(directory).status((err, status) => {
                if (err) reject(err);

                // CORRECTION D'UN BUG DANS LA LIBRAIRIE
                status.created = status.created.map(file => file.replace(/"/gi, ''));
                status.files.map(file => {
                    file.path = file.path.replace(/"/gi, '');
                    return file;
                });

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

    unstage(directory, files) {
        const me = this;
        return new Promise(function(resolve, reject) {
            git(directory).reset(files, (err, status) => {
                if (err) reject(err);
                resolve(me.status(directory));
            });
        });
    }

    commit(directory, state) {
        const me = this;
        return new Promise(function(resolve, reject) {
            git(directory).commit(state.summary, (err, status) => {
                if (err) reject(err);
                resolve(status);
            });
        });
    }

    findLocalBranch(directory) {
        const me = this;
        return new Promise(function(resolve, reject) {
            git(directory).branchLocal((err, branchSummary) => {
                if (err) reject(err);
                resolve(branchSummary);
            });
        });
    }

    findRemoteBranch(directory) {
        const me = this;
        return new Promise(function(resolve, reject) {
            git(directory).branch({'-r': true}, (err, branchSummary) => {
                if (err) reject(err);
                resolve(branchSummary);
            });
        });
    }

    getRemotes(directory) {
        const me = this;
        return new Promise(function(resolve, reject) {
            git(directory).getRemotes(true, (err, remotesObject) => {
                if (err) reject(err);
                resolve(remotesObject);
            });
        });
    }

    show(directory, listLogLine) {
        const me = this;
        return new Promise(function(resolve, reject) {
            git(directory).show({}, (err, remotesObject) => {
                if (err) reject(err);
                resolve(remotesObject);
            });
        });
    }
}

export default new GitService();
