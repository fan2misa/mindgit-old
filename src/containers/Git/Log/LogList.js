import React from "react";
import connect from "react-redux/es/connect/connect";
import Log from "../../../components/Git/Graph/Log";
import GitGraphInfo from "../../../git/Graph/GitGraphInfo";

class LogList extends React.Component {
    render() {
        return (
            <div className="graph">
                <table className="commit-log-list">
                    <tbody>
                        {this.props.commits.map((commit, key) => <Log key={key} commit={commit} gitGraphInfo={this.props.gitGraphInfo} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        commits: state.git.commits,
        gitGraphInfo: new GitGraphInfo(),
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LogList);
