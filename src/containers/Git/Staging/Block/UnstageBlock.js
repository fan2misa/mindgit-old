
import React from "react";

import connect from "react-redux/es/connect/connect";

import StagingBlock from './../../../../components/Git/Staging/Block/StagingBlock';

import {stageAction} from "../../../../actions/git/stage";
import PathToTreeUtil from "../../../../utils/PathToTreeUtil";

const mapStateToProps = (state, ownProps) => {
    return {
        buttonText: 'Stage all changes',
        buttonType: 'btn-success',
        fileIconProperty: 'working_dir',
        files: PathToTreeUtil.get(state.git.status
            ? state.git.status.files.filter(file => ["A", "M", "D", "R"].includes(file.working_dir) || (file.index === file.working_dir))
            : [], file => file.path)
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        buttonOnClick: () => dispatch(stageAction('*')),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(StagingBlock);
