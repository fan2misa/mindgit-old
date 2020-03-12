import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

class Navbar extends React.Component {
    render() {
        console.log('Navbar', this.props);
        return (
            <nav id="topbar" className="navbar sticky-top navbar-dark bg-primary">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <button className="btn nav-link" onClick={() => this.props.stageAll()}>Stage</button>
                    </li>
                </ul>
            </nav>
        );
    }
}

Navbar.propTypes = {
    currentBranch: PropTypes.string.isRequired,
    openRepository: PropTypes.func.isRequired,
    stageAll: PropTypes.func.isRequired,
};

export default Navbar;
