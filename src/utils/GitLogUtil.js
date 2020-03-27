
import pretty from '../git-pretty';

class GitLogUtil {

    constructor() {
        this.splitterCommit = 'f670514e-d491-41c8-a487-2bd77a44a84f';
        this.splitterProperty = '92ed228d-93d7-47ee-a928-17717293dbd4';
        this.splitterValue = '2e55c615-c505-455d-91c6-c6092358eb1e';

        this.prettyFormat = this.toString(pretty);
    }

    toString(format) {
        let result = [];
        for (var key in format) {
            result.push(`${key}${this.splitterValue}${format[key].format}`);
        }
        return result.join(this.splitterProperty) + this.splitterCommit;
    }

    transform(value) {
        let commits = [];

        value.split(this.splitterCommit).forEach(commitString => {
            let commit = {};

            if (commitString.length) {
                commitString.split(this.splitterProperty).forEach(commitValue => {
                    let data = commitValue.split(this.splitterValue);

                    let key = data[0].replace(/(\r\n|\n|\r)/g, "");
                    let value = data[1];

                    commit[key] = pretty[key].parser(value);
                });

                commits.push(commit);
            }

        });

        return commits;
    }
}

export default new GitLogUtil();
