import {openMainModalAction} from "../modal/openModal";
import React from "react";
import CheckoutLocalBranchForm from "../../components/Git/Checkout/CheckoutLocalBranchForm";

export const openModalCheckoutLocalBranchAction = () => {
    return (dispatch) => {
        dispatch(openMainModalAction('modal-md', 'Branch Name', <CheckoutLocalBranchForm submit={(state) => dispatch(checkoutLocalBranchAction(state))} />));
    }
};

export const checkoutLocalBranchAction = (state) => {
    return (dispatch) => {
        console.log('checkoutLocalBranchAction', state);
    }
};
