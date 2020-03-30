import React from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

import {fetchAction} from "../actions/git/fetch";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFolderOpen, faSync, faDownload, faUpload, faSpinner} from '@fortawesome/free-solid-svg-icons';
import {pullAction} from "../actions/git/pull";
import {pushAction} from "../actions/git/push";

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
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        currentBranch: state.git.current,
        loadPull: state.load.pull,
        loadPush: state.load.push,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetch: () => dispatch(fetchAction()),
        pull: (current) => dispatch(pullAction(current)),
        push: (current) => dispatch(pushAction(current)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);