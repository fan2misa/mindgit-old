import React from "react";
import {Link} from "react-router-dom";
import { connect } from 'react-redux';

import { openRepositoryAction } from './../actions/git/openRepository';
import { stageAction } from './../actions/git/stage';

class Navbar extends React.Component {
    render() {
        return (
            <nav id="topbar" className="navbar navbar-expand-lg sticky-top navbar-dark bg-primary">
                <div id="topbarNav" className="navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button className="btn nav-link" onClick={() => this.props.openRepository()}>Reposistory</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn nav-link" onClick={() => this.props.stageAll()}>Stage</button>
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
      openRepository: () => dispatch(openRepositoryAction()),
      stageAll: () => dispatch(stageAction('*')),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);