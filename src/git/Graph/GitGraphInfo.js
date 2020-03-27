
class GitGraphInfo {

    constructor() {
        this.branches = [];
    }

    init(commit) {
        let branchCurrent = this.getBranch(commit.abbr_hash);

        if (undefined === branchCurrent) {
            branchCurrent = this.createBranch(commit.abbr_hash);
        } else {
            this.removeBranchParent(commit.abbr_hash);
            branchCurrent.hasDirectParent = true;
        }

        branchCurrent.hasDirectChild = !!commit.abbr_parent.length;

        let currentLevel = true;

        branchCurrent.branches = this.addOtherBranches(branchCurrent);

        commit.abbr_parent.forEach(parent => {
            let branchParent = this.getBranch(parent);

            if (undefined === branchParent || commit.abbr_parent.length === 2) {

                let addParent = false;
                if (undefined === branchParent) {
                    branchParent = this.createBranch(parent);
                    addParent = true;
                }

                if (currentLevel) {
                    branchParent.level = branchCurrent.level;
                    currentLevel = false;
                }

                if (addParent) {
                    this.branches = [...this.branches, branchParent];
                }
                branchCurrent.finish = [...branchCurrent.finish, branchParent];
            } else {
                this.branches[this.getIndex(parent)].start = [...this.branches[this.getIndex(parent)].start, branchCurrent];
            }
        });

        branchCurrent.maxLevel = this.getMaxLevel(branchCurrent);

        return branchCurrent;
    }

    createBranch(hash) {
        return {
            hash: hash,
            level: this.getLevelAvailable(),
            hasDirectParent: false,
            hasDirectChild: true,
            branches: [],
            finish: [],
            start: [],
            maxLevel: 1
        };
    }

    getLevelAvailable() {
        let level = 0;
        let finish = false;

        let startBranches = [];
        this.branches.forEach(branch => {
            startBranches = [...startBranches, ...branch.start];
        });

        while (!finish) {
            level++;

            if (this.branches.filter(branch => branch.level === level).length === 0) {
                if (startBranches.filter(branch => branch.level === level).length === 0) {
                    finish = true;
                }

            }
        }

        return level;
    }

    getIndex(hash) {
        return this.branches.findIndex(branch => branch.hash === hash);
    }

    getBranch(hash) {
        return this.branches.find(branch => branch.hash === hash);
    }

    removeBranchParent(hash) {
        this.branches = this.branches.filter(smallBranch => smallBranch.hash !== hash);
    }

    addOtherBranches(branchCurrent) {
        let branches = [];
        branches = this.branches.filter(branch => !branchCurrent.finish.includes(branch));

        this.branches.forEach(branch => {
            branches = [
                ...branches,
                ...branch.start.filter(s => s.hash !== branchCurrent.hash),
                ...branch.finish.filter(s => s.hash !== branchCurrent.hash)
            ];
        });

        return branches;
    }

    getMaxLevel(branchCurrent) {
        let level = branchCurrent.level;

        branchCurrent.branches.forEach(branch => level = branch.level > level ? branch.level : level);
        branchCurrent.finish.forEach(branch => level = branch.level > level ? branch.level : level);
        branchCurrent.start.forEach(branch => level = branch.level > level ? branch.level : level);

        return level;
    }
}

export default GitGraphInfo;
