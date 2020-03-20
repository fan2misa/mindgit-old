
class GitGraphService {
    getRefs(listLogLine) {
        let refs = listLogLine.refs.split(' -> ');
        return (refs.length > 1
            ? [refs[0], ...refs[1].split(', ')]
            : refs[0].split(', ')).filter(branch => !!branch);
    }
}

export default new GitGraphService();
