
import GitService from '../../services/GitService';

export const stageAction = () => {
    return (dispatch) => {
        GitService.stage('F:\\www\\mindgit', '*');
    }
};
