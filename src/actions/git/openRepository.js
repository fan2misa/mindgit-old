
import $ from 'jquery';

export const openRepositoryAction = () => {
    return (dispatch) => {
        $('#test').modal('show');
    }
};