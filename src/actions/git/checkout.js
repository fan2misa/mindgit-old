import {closeMainModalAction, openMainModalAction} from "../modal/openModal";
import React from "react";
import CheckoutLocalBranchForm from "../../components/Git/Checkout/CheckoutLocalBranchForm";
import GitService from "../../services/GitService";
import LocalStorageService from "../../services/LocalStorageService";
import {LOCALSTORAGE_DIRECTORY} from "../../constantes/services/LocalStorageConstante";
import {refreshAction} from "./refresh";
import {alertErrorAction} from "../app";

export const openModalCheckoutLocalBranchAction = (commit) => {
    return (dispatch) => {
        let body = <CheckoutLocalBranchForm commit={commit} submit={(state, commit) => dispatch(checkoutLocalBranchAction(state, commit))} />;
        dispatch(openMainModalAction('modal-md', 'Branch Name', body));
    }
};

export const checkoutLocalBranchAction = (state, commit) => {
    return (dispatch) => {
        dispatch(closeMainModalAction());
        GitService.checkout(LocalStorageService.get(LOCALSTORAGE_DIRECTORY), state, commit)
            .then(() => dispatch(refreshAction()))
            .catch(error => dispatch(alertErrorAction(error)));
    }
};
