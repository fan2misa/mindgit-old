
import GitService from '../../services/GitService';

export const stageAction = () => {
    return (dispatch) => {
        GitService.stage('/home/gjean/www/mindgit', '*');
    }
}