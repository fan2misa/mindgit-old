import React from "react";
import {Router, Route} from "react-router-dom";
import {connect} from "react-redux";
import CssBaseline from '@material-ui/core/CssBaseline';

import history from './history';

import HomeController from './controllers/HomeController';
import AboutController from './controllers/AboutController';

import Topbar from './containers/Topbar';
import {withStyles} from '@material-ui/core/styles';
import Footer from "./containers/Footer";

const styles = theme => ({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
});

class App extends React.Component {
    render() {
        return <div className={this.props.classes.container}>
            <CssBaseline />
            <Router history={history}>
                <Topbar />
                <Route path="/" exact component={HomeController} />
                <Route path="/about" exact component={AboutController} />
                <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(App));
