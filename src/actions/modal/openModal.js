import React from "react";
import $ from 'jquery';

import {SET_INFO_MODAL} from "../../constantes/actions/modalConstantes";
import ModalBody from "../../components/Modal/ModalBody";
import ModalFooter from "../../components/Modal/ModalFooter";

export const closeMainModalAction = () => {
    return (dispatch) => {
        dispatch({
            type: SET_INFO_MODAL,
            data: {
                type: null,
                title: '',
                body: ''
            }
        });

        $('#main-modal').modal('hide');
    }
};

export const openMainModalAction = (type, title, body, footer) => {
    if (footer !== undefined) {
        footer = <ModalFooter>{footer}</ModalFooter>
    }

    return (dispatch) => {
        dispatch({
            type: SET_INFO_MODAL,
            data: {
                type: type,
                title: title,
                body: <div>
                    <ModalBody>{body}</ModalBody>
                    {footer}
                </div>
            }
        });

        $('#main-modal').modal('show');
    }
};
