import React from "react";
import {connect} from "react-redux";

import StagingSidebar from "../components/Git/Staging/StagingSidebar";

import LocalBranch from "../containers/Git/Branch/LocalBranch";
import RemoteBranch from "../containers/Git/Branch/RemoteBranch";
import StageBlock from "../containers/Git/Staging/Block/StageBlock";
import UnstageBlock from "../containers/Git/Staging/Block/UnstageBlock";
import Commiter from "../containers/Git/Commiter";
import LogList from '../containers/Git/Log/LogList';

class HomeController extends React.Component {
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
                    <LogList />
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
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeController);
