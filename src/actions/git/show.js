
import LocalStorageService from '../../services/LocalStorageService';
import GitService from '../../services/GitService';

import {LOCALSTORAGE_DIRECTORY} from '../../constantes/services/LocalStorageConstante';

export const showAction = (listLogLine) => {
    return (dispatch) => {
        if (GitService.isRepository(LocalStorageService.get(LOCALSTORAGE_DIRECTORY))) {
            GitService.show(LocalStorageService.get(LOCALSTORAGE_DIRECTORY), listLogLine)
                .then(data => console.log(data));
        }
    }
};
