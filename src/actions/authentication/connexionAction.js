import APIService from "../../services/APIService";
import entrypoints from "../../constantes/API/passmaker.entrypoints";
import {SET_CURRENT_USER} from '../../constantes/actions/authenticationConstantes';
import {actions} from "react-redux-form";
import history from "../../history";
import AuthService from "../../services/AuthService";

export const connexionAction = (user) => {
    return (dispatch) => {
        APIService.post(APIService.getUrl(process.env.API_URL, entrypoints.oauth.token), {
            body : JSON.stringify(user)
        })
            .then((user) => {
                AuthService.setAuthenticatedUser(user)
                    .then(() => {
                        dispatch({type: SET_CURRENT_USER, data: user});
                        history.push('/');
                    });
            })
            .catch((response) => {
                dispatch(actions.setValidity('forms.user.email', false));
                dispatch(actions.setErrors('forms.user.email', response.message));
            });
    }
}