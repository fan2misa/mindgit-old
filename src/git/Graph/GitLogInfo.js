
class GitLogInfo {

    constructor(commits) {
        this.state = {
            maxLevel: 1,
        };

        let parents = [];
        commits.forEach(commit => {
            parents = [...parents, ...commit.abbr_parent].filter(parent => parent !== commit.abbr_hash);
            this.state = {
                maxLevel: this.state.maxLevel < parents.length ? parents.length : this.state.maxLevel
            };
        });
    }

}

export default GitLogInfo;
