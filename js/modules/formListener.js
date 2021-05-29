import {bindForm} from "./bindForm.js";
import {modalInstance} from "./modal.js";

export const formListener = () => {
    const feedBackForm = document.querySelector('.feedback-form');
    const subscribeForm = document.querySelector('.subscribe-form');
    const modalForm = document.querySelector('.modal-form');
    const modalPopup = document.querySelector('.modal');
    const modal = modalInstance({
        modal: modalPopup,
    });
    if (feedBackForm){
        bindForm(feedBackForm, () => {
            window.location.assign('thanks.html');
        });
    }
    if(subscribeForm){
        bindForm(subscribeForm);
    }
    if(modalForm){
        bindForm(modalForm, () => {

            modal.closeModal();
        });
    }

};