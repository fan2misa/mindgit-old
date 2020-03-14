import React from "react";
import {connect} from "react-redux";

import {statusAction} from './../actions/git/status';

class HomeController extends React.Component {
    componentDidMount() {
        this.props.load(this.props.app.user);
    }

    render() {
        console.log(this.props.status);
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
        app: state.app,
        status: state.git.status,
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
