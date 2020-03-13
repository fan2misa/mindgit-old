import React from "react";
import {connect} from "react-redux";

import {statusAction} from './../actions/git/status';

class HomeController extends React.Component {
    componentDidMount() {
        this.props.load(this.props.app.user);
    }

    render() {
        return (
            <main id="dashboard">
                <div className="dashboard-left">

                </div>
                <div className="dashboard-center">

                </div>
                <div className="dashboard-right">

                </div>
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        app: state.app
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        load: (user) => dispatch(function (user) {
            dispatch(statusAction())
        }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeController);
