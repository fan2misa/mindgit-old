
import React from "react";

import connect from "react-redux/es/connect/connect";
import CollapeCard from "../../../components/Card/CollapeCard";

import {localBranchAction} from './../../../actions/git/localBranch';

class LocalBranch extends React.Component {
    componentDidMount() {
        this.props.getBranch();
    }

    render() {
        console.log(this.props.branch);
        return (
            <CollapeCard id="branch-local" title="Local">
                <ul className="list-unstyled">
                    {Object.keys(this.props.branch).map(key => <li key={key}>{this.props.branch[key].name}</li>)}
                </ul>
            </CollapeCard>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        branch: state.git.branchLocal
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getBranch: () => dispatch(localBranchAction())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LocalBranch);
