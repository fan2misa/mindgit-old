
import React from "react";

import connect from "react-redux/es/connect/connect";
import CollapeCard from "../../../components/Card/CollapeCard";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faFolder } from '@fortawesome/free-solid-svg-icons';

import {localBranchAction} from './../../../actions/git/localBranch';
import PathToTreeUtil from "../../../utils/PathToTreeUtil";

class LocalBranch extends React.Component {

    componentDidMount() {
        this.props.getBranch();
    }

    getIcon(branch) {
        return branch.children.length ? faFolder : faCodeBranch;
    }

    getSub(name, children) {
        if (children.length) {
            return <ul id={"local" + name} className="list-unstyled">
                {children.map(branch => {
                    return <li key={branch.name}>
                        <div className="media">
                            <div style={{width: 20}}>
                                <FontAwesomeIcon className="align-self-center" icon={this.getIcon(branch)} />
                            </div>
                            <div className="media-body">
                                <div data-toggle="collapse" data-target={"#locales-" + branch.name}>
                                    {branch.name}
                                </div>
                                <div id={"locales-" + branch.name} className="collapse">
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
            <CollapeCard id="branch-local" title="Local">
                <ul className="list-unstyled">
                    {this.props.branch.map(branch => {
                        return <li key={branch.name}>
                            <div className="media">
                                <div style={{width: 20}}>
                                    <FontAwesomeIcon icon={this.getIcon(branch)} />
                                </div>
                                <div className="media-body">
                                    <div data-toggle="collapse" data-target={"#locales-" + branch.name}>
                                        {branch.name}
                                    </div>
                                    <div id={"locales-" + branch.name} className="collapse">
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
        branch: PathToTreeUtil.get(Object.keys(state.git.branchLocal))
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getBranch: () => dispatch(localBranchAction())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LocalBranch);
