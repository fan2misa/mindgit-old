
import React from "react";

import connect from "react-redux/es/connect/connect";
import CollapeCard from "../../../components/Card/CollapeCard";

import {remoteBranchAction} from './../../../actions/git/remoteBranch';

class RemoteBranch extends React.Component {
    componentDidMount() {
        this.props.getBranch();
    }

    render() {
        return (
        <CollapeCard id="branch-remote" title="Remote">
                <ul className="list-unstyled">
                    {Object.keys(this.props.branch).map(key => <li key={key}>{this.props.branch[key].name}</li>)}
                </ul>
            </CollapeCard>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        branch: state.git.branchRemote
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getBranch: () => dispatch(remoteBranchAction())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RemoteBranch);
