class GitLogUtil {

    constructor() {
        this.splitterProperty = '|||';
        this.splitterValue = ':::';

        this.pretty = {
            hash: {
                format: '%H',
                parser: value => value
            },
            abbreviated_hash: {
                format: '%h',
                parser: value => value
            },
            parent: {
                format: '%P',
                parser: value => value.split(' ')
            },
            abbreviated_parent: {
                format: '%p',
                parser: value => value.split(' ')
            },
            author_name: {
                format: '%aN',
                parser: value => value
            },
            author_email: {
                format: '%ae',
                parser: value => value
            },
            subject: {
                format: '%s',
                parser: value => value
            },
            body: {
                format: '%b',
                parser: value => value
            },
            date: {
                format: '%ai',
                parser: value => value
            },
            refs: {
                format: '%D',
                parser: value => value.split(', ')
            },
            message: {
                format: '%s',
                parser: value => value
            }
        };

        this.prettyFormat = this.toString(this.pretty);
    }

    toString(format) {
        let result = [];
        for (var key in format) {
            result.push(`${key}${this.splitterValue}${format[key].format}`);
        }
        return result.join(this.splitterProperty);
    }

    transform(value) {
        let commits = [];
        value.split('\n').forEach(commitString => {
            let commit = {};
            commitString.split(this.splitterProperty).forEach(commitValue => {
                let data = commitValue.split(this.splitterValue);
                commit[data[0]] = this.pretty[data[0]].parser(data[1]);
            });
            commits.push(commit);
        });
        return commits;
    }
}

export default new GitLogUtil();
