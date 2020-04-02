
import LocalStorageService from '../../services/LocalStorageService';
import GitService from '../../services/GitService';

import {LOCALSTORAGE_DIRECTORY} from '../../constantes/services/LocalStorageConstante';

export const fetchAction = () => {
    return (dispatch) => {
        if (GitService.isRepository(LocalStorageService.get(LOCALSTORAGE_DIRECTORY))) {
            GitService.fetch(LocalStorageService.get(LOCALSTORAGE_DIRECTORY))
                .then(fetchSummary => {
                    console.log(fetchSummary);
                });
        }
    }
};
