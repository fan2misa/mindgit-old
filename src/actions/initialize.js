import {refreshAction} from "./git/refresh";

export const initializeAction = () => {
    return (dispatch) => {
        dispatch(refreshAction());
    }
};
