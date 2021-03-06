import React from "react";
import {connect} from 'react-redux';
import gravatar from 'gravatar';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faFolderOpen,
    faSync,
    faDownload,
    faUpload,
    faBox,
    faBoxOpen,
    faSpinner,
    faCodeBranch
} from '@fortawesome/free-solid-svg-icons';

import {fetchAction} from "../actions/git/fetch";
import {pullAction} from "../actions/git/pull";
import {pushAction} from "../actions/git/push";
import {openModalCheckoutLocalBranchAction} from "../actions/git/checkout";

class Navbar extends React.Component {
    render() {
        return (
            <nav id="topbar" className="navbar sticky-top navbar-dark bg-primary">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <button className="btn nav-link" data-toggle="modal" data-target="#repository-management-modal">
                            <FontAwesomeIcon icon={faFolderOpen} data-toggle="tooltip" data-placement="bottom" title="Open Repository" />
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="btn nav-link" onClick={this.props.fetch}>
                            <FontAwesomeIcon icon={faSync} data-toggle="tooltip" data-placement="bottom" title="Fetch" />
                        </button>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <button className="btn nav-link" onClick={() => this.props.pull(this.props.currentBranch)}>
                            {this.props.loadPull
                                ? <FontAwesomeIcon icon={faSpinner} pulse data-toggle="tooltip" data-placement="bottom" title="Pull" />
                                : <FontAwesomeIcon icon={faDownload} data-toggle="tooltip" data-placement="bottom" title="Pull" />}
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="btn nav-link" onClick={() => this.props.push(this.props.currentBranch)}>
                            {this.props.loadPush
                                ? <FontAwesomeIcon icon={faSpinner} pulse data-toggle="tooltip" data-placement="bottom" title="Push" />
                                : <FontAwesomeIcon icon={faUpload} data-toggle="tooltip" data-placement="bottom" title="Push" />}
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="btn nav-link" onClick={() => this.props.checkout()}>
                            <FontAwesomeIcon icon={faCodeBranch} data-toggle="tooltip" data-placement="bottom" title="Branch" />
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="btn nav-link">
                            <FontAwesomeIcon icon={faBox} data-toggle="tooltip" data-placement="bottom" title="Stash" />
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="btn nav-link">
                            <FontAwesomeIcon icon={faBoxOpen} data-toggle="tooltip" data-placement="bottom" title="Pop" />
                        </button>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <div className="media">
                            <img src={gravatar.url(this.props.user.email, {size: '30', rating: 'pg', d: 'retro'}, true)} className="align-self-center mr-1" />
                            <div className="media-body">
                                <div className="user">
                                    <div className="name">{this.props.user.name}</div>
                                    <div className="email">{this.props.user.email}</div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        currentBranch: state.git.current,
        user: state.user,
        loadPull: state.load.pull,
        loadPush: state.load.push,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetch: () => dispatch(fetchAction()),
        pull: (current) => dispatch(pullAction(current)),
        push: (current) => dispatch(pushAction(current)),
        checkout: () => dispatch(openModalCheckoutLocalBranchAction()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);