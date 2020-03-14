
import React from "react";
import {Router, Route} from "react-router-dom";
import {connect} from "react-redux";

import history from './history';

import HomeController from './controllers/HomeController';
import AboutController from './controllers/AboutController';

import Topbar from './containers/Topbar';
import Footer from "./containers/Footer";
import RepositoriesModal from "./containers/RepositoriesModal";

class App extends React.Component {
    render() {
        return <div className="app-container">
            <Router history={history}>
                <Topbar />
                <Route path="/" exact component={HomeController} />
                <Route path="/about" exact component={AboutController} />
                <Footer />
                <RepositoriesModal>
                    <h1>test</h1>
                    <h2>test2</h2>
                </RepositoriesModal>
            </Router>
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.app.user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
