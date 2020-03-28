
import React from "react";

import connect from "react-redux/es/connect/connect";
import CollapeCard from "../../../components/Card/CollapeCard";

import {remoteBranchAction} from './../../../actions/git/remoteBranch';
import PathToTreeUtil from "../../../utils/PathToTreeUtil";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCloud, faCrosshairs, faCodeBranch, faFolder} from "@fortawesome/free-solid-svg-icons";

class RemoteBranch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            root : {}
        };
    }
    componentDidMount() {
        this.props.getBranch();
    }

    getIcon(branch) {
        return branch.children.length ? faFolder : faCodeBranch;
    }

    getSub(name, children) {
        if (children.length) {
            return <ul className="list-unstyled">
                {children.map(branch => {
                    return <li key={branch.name}>
                        <div className="media">
                            <div style={{width: 20}}>
                                <FontAwesomeIcon className="align-self-center" icon={this.getIcon(branch)} />
                            </div>
                            <div className="media-body">
                                <div data-toggle="collapse" data-target={"#remotes-" + branch.name}>
                                    {branch.name}
                                </div>
                                <div id={"remotes-" + branch.name} className="collapse">
                                    {this.getSub(branch.name, branch.children)}
                                </div>
                            </div>
                        </div>
                    </li>
                })}
            </ul>
        }
    }

    render() {
        return (
        <CollapeCard id="branch-remote" title="Remote" icon={faCloud}>
            <ul className="list-unstyled">
                {this.props.branch.map(branch => {
                    return <li key={branch.name}>
                        <div className="media">
                            <div style={{width: 20}}>
                                <FontAwesomeIcon icon={faCrosshairs} />
                            </div>
                            <div className="media-body">
                                <div data-toggle="collapse" data-target={"#remotes-" + branch.name}>
                                    {branch.name}
                                </div>
                                <div id={"remotes-" + branch.name} className="collapse show">
                                    {this.getSub(branch.name, branch.children)}
                                </div>
                            </div>
                        </div>
                    </li>
                })}
            </ul>
            </CollapeCard>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        branch: PathToTreeUtil.get(Object.keys(state.git.branchRemote))
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getBranch: () => dispatch(remoteBranchAction())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RemoteBranch);
