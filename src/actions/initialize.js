import {refreshAction} from "./git/refresh";

export const initializeAction = () => {
    return (dispatch) => {
        dispatch(refreshAction());
        setInterval(() => dispatch(refreshAction()), 3000);
    }
};
