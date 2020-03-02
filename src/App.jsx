import React from "react";
import {Router, Route, Link} from "react-router-dom";
import {connect} from "react-redux";

import history from './history';

import HomeController from './controllers/HomeController';
import AboutController from './controllers/AboutController';

class App extends React.Component {
    render() {
        return <div>
            <Router history={history}>
                <Route path="/" exact component={HomeController} />
                <Route path="/about" exact component={AboutController} />
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/about">A propos</Link></li>
                </ul>
            </Router>
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.app.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
