
import LocalStorageService from '../../services/LocalStorageService';
import GitService from '../../services/GitService';

import {LOCALSTORAGE_DIRECTORY} from '../../constantes/services/LocalStorageConstante';

export const stageAction = () => {
    return (dispatch) => {
        GitService.stage(LocalStorageService.get(LOCALSTORAGE_DIRECTORY), '*');
    }
};
