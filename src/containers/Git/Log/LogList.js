import React from "react";
import { remote } from 'electron';
import connect from "react-redux/es/connect/connect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';

import Log from "../../../components/Git/Graph/Log";
import GitGraphInfo from "../../../git/Graph/GitGraphInfo";

import LogContextualMenuTemplate from "../../../menu/LogContextualMenuTemplate";

class LogList extends React.Component {
    renderLoader() {
        return <div className="loader">
            <FontAwesomeIcon icon={faSpinner} pulse />
        </div>;
    }

    getMenu(commit) {
        return remote.Menu.buildFromTemplate(this.props.getLogContextualMenuTemplate(this.props.currentBranch, commit).get())
    }

    renderLogs() {
        return <table className="commit-log-list">
            <tbody>
            {this.props.commits.map((commit, key) =>
                <Log key={key}
                     commit={commit}
                     menu={this.getMenu(commit)}
                     gitGraphInfo={this.props.gitGraphInfo} />)}
            </tbody>
        </table>;
    }

    render() {
        return (
            <div className="graph">
                {this.props.loadLogs ? this.renderLoader() : this.renderLogs()}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        currentBranch: state.git.current,
        commits: state.git.commits,
        loadLogs: state.load.logs,
        gitGraphInfo: new GitGraphInfo(),
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getLogContextualMenuTemplate: (currentBranch, commit) => new LogContextualMenuTemplate(dispatch, currentBranch, commit)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LogList);
