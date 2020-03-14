import React from "react";
import {connect} from "react-redux";

import {statusAction} from './../actions/git/status';

import StagingSidebar from "../components/Git/Staging/StagingSidebar";
import StageBlock from "../containers/Git/Staging/Block/StageBlock";
import UnstageBlock from "../containers/Git/Staging/Block/UnstageBlock";

class HomeController extends React.Component {
    componentDidMount() {
        this.props.load(this.props.app.user);
        setInterval(() => this.props.refresh(this.props.app.user), 1000);
    }

    render() {
        return (
            <main id="dashboard">
                <div className="dashboard-left">

                </div>
                <div className="dashboard-center">

                </div>
                <div className="dashboard-right">
                    <StagingSidebar>
                        <UnstageBlock />
                        <StageBlock />
                    </StagingSidebar>
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
        refresh: (user) => dispatch(function (user) {
            dispatch(statusAction())
        }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeController);
