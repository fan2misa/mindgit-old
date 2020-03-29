
import React from "react";

import connect from "react-redux/es/connect/connect";
import CollapeCard from "../../../components/Card/CollapeCard";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faCodeBranch, faFolder } from '@fortawesome/free-solid-svg-icons';

import {localBranchAction} from './../../../actions/git/localBranch';
import PathToTreeUtil from "../../../utils/PathToTreeUtil";

class LocalBranch extends React.Component {

    componentDidMount() {
        this.props.getBranch();
    }

    getIcon(branch) {
        return branch.children.length ? faFolder : faCodeBranch;
    }

    getBranchClassName(branch) {
        if (null !== this.props.current && branch.hasOwnProperty('value') && branch.value === this.props.current.name) {
            return 'active';
        }
    }

    getSub(name, children) {
        if (children.length) {
            return <ul id={"local" + name} className="list-unstyled">
                {children.map(branch => {
                    return <li key={branch.name} className={this.getBranchClassName(branch)}>
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
            <CollapeCard id="branch-local" title="Local" icon={faDesktop}>
                <ul className="list-unstyled">
                    {this.props.branch.map(branch => {
                        return <li key={branch.name} className={this.getBranchClassName(branch)}>
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
    let current = null;
    let currents = Object.keys(state.git.branchLocal)
        .map(key => state.git.branchLocal[key])
        .filter(branch => branch.current === true);

    if (currents.length) {
        current = currents[0];
    }

    return {
        branch: PathToTreeUtil.get(Object.keys(state.git.branchLocal)),
        current: current,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getBranch: () => dispatch(localBranchAction())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LocalBranch);
