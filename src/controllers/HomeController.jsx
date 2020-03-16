import React from "react";
import {connect} from "react-redux";

import {statusAction} from './../actions/git/status';
import {refreshAction} from './../actions/git/refresh';

import StagingSidebar from "../components/Git/Staging/StagingSidebar";

import LocalBranch from "../containers/Git/Branch/LocalBranch";
import RemoteBranch from "../containers/Git/Branch/RemoteBranch";
import StageBlock from "../containers/Git/Staging/Block/StageBlock";
import UnstageBlock from "../containers/Git/Staging/Block/UnstageBlock";
import Commiter from "../containers/Git/Commiter";

class HomeController extends React.Component {
    componentDidMount() {
        this.props.load(this.props.app.user);
        setInterval(() => this.props.refresh(this.props.app.user), 1000);
    }

    render() {
        return (
            <main id="dashboard">
                <div className="dashboard-left">
                    <div className="accordion">
                        <LocalBranch />
                        <RemoteBranch />
                    </div>
                </div>
                <div className="dashboard-center">

                </div>
                <div className="dashboard-right">
                    <StagingSidebar>
                        <UnstageBlock />
                        <StageBlock />
                    </StagingSidebar>
                    <Commiter/>
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
        load: (user) => dispatch(user => {dispatch(statusAction())}),
        refresh: (user) => dispatch((user) => dispatch(refreshAction())),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeController);
