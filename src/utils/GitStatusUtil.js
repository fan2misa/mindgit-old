class GitStatusUtil {

    constructor() {

    }

    hasStagedFiles(status)
    {
        if (status) {
            return status.files.filter(file => ["A", "M", "D", "R"].includes(file.index)).length;
        }

        return false;
    }
}

export default new GitStatusUtil();
