
import React from "react";

import connect from "react-redux/es/connect/connect";

import StagingBlock from './../../../../components/Git/Staging/Block/StagingBlock';

import {unstageAction} from "../../../../actions/git/stage";

const mapStateToProps = (state, ownProps) => {
    return {
        buttonText: 'Unstage',
        buttonType: 'btn-danger',
        fileIconProperty: 'index',
        files: state.git.status
            ? state.git.status.files.filter(file => ["A", "M", "D", "R"].includes(file.index))
            : []
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        buttonOnClick: () => dispatch(unstageAction('*')),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(StagingBlock);
