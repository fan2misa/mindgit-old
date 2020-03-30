import React from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

import {fetchAction} from "../actions/git/fetch";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFolderOpen, faSync, faDownload, faUpload} from '@fortawesome/free-solid-svg-icons';
import {pullAction} from "../actions/git/pull";
import {pushAction} from "../actions/git/push";

class Navbar extends React.Component {
    render() {
        return (
            <nav id="topbar" className="navbar sticky-top navbar-dark bg-primary">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <button className="btn nav-link" data-toggle="modal" data-target="#repository-management-modal">
                            <FontAwesomeIcon icon={faFolderOpen}/>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="btn nav-link" onClick={this.props.fetch}>
                            <FontAwesomeIcon icon={faSync}/>
                        </button>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <button className="btn nav-link" onClick={() => this.props.pull(this.props.currentBranch)}>
                            <FontAwesomeIcon icon={faDownload}/>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="btn nav-link" onClick={() => this.props.push(this.props.currentBranch)}>
                            <FontAwesomeIcon icon={faUpload}/>
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
        currentBranch: state.git.current
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