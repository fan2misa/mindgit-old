import React from "react";
import {Link} from "react-router-dom";
import { connect } from 'react-redux';

import { openRepositoryModalAction } from './../actions/git/openRepository';
import {fetchAction} from "../actions/git/fetch";

class Navbar extends React.Component {
    render() {
        return (
            <nav id="topbar" className="navbar navbar-expand-lg sticky-top navbar-dark bg-primary">
                <div id="topbarNav" className="navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button className="btn nav-link" data-toggle="modal" data-target="#repository-management-modal">Reposistory</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn nav-link" onClick={() => this.props.fetch()}>Fetch</button>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentBranch: 'MindGit / master'
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      fetch: () => dispatch(fetchAction()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);