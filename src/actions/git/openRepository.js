
import GitService from '../../services/GitService';

export const openRepositoryAction = () => {
    return (dispatch) => {
        GitService.open('/home/gjean/www/mindgit');
    }
}