import React from "react";
import connect from "react-redux/es/connect/connect";
import GitGraphService from "../../services/GitGraphService";
import BranchColumn from "../../components/Git/Graph/BranchColumn";

class Graph extends React.Component {
    showCommit(key, commit) {
        return (
            <tr key={key} className="commit-log">
                <td className="commit-log-refs">
                    <BranchColumn refs={GitGraphService.getRefs(commit)}/>
                </td>
                <td></td>
                <td className="commit-log-message"><span>{commit.message}</span></td>
                <td className="commit-log-author">{commit.author_name}</td>
            </tr>
        );
    }

    render() {
        return (
            <div className="graph">
                <table className="commit-log-list">
                    <thead>
                        <tr>
                            <th>Branch</th>
                            <th>Graph</th>
                            <th>Message</th>
                            <th>Author</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.commits.map((commit, key) => this.showCommit(key, commit))}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        commits: state.git.commits
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Graph);
