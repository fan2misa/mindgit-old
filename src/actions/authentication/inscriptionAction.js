import history from '../../history';
import APIService from '../../services/APIService';
import FormService from '../../services/FormService';
import entrypoints from '../../constantes/API/passmaker.entrypoints';

export const inscriptionAction = (user) => {
    return (dispatch) => {
        APIService.post(APIService.getUrl(process.env.API_URL, entrypoints.oauth.subscribe), {
            body : JSON.stringify(user)
        })
            .then((data) => history.push('/connexion'))
            .catch((response) => {
                FormService.setErrors('user', dispatch, response);
            });
    }
}