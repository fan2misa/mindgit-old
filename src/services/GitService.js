import git from 'simple-git';
import fs from 'fs';
import {exec} from "child_process";
import GitLogUtil from "../utils/GitLogUtil";

class Service {

    isRepository(directory) {
        return fs.existsSync(directory);
    }

    log(directory, skip, maxCount) {
        skip = skip || 0;
        maxCount = maxCount || 100;
        return new Promise(function(resolve, reject) {
            let cmd = `git log --all --skip=${skip} --max-count=${maxCount} --pretty=format:"${GitLogUtil.prettyFormat}"`
            exec(`cd ${directory} && ${cmd}`, (err, stdout) => {
                if (err) reject(err);
                resolve(GitLogUtil.transform(stdout));
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

    unstage(directory, files) {
        const me = this;
        return new Promise(function(resolve, reject) {
            git(directory).reset(files, (err, status) => {
                if (err) reject(err);
                resolve(me.status(directory));
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

export default new Service();
