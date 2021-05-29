import {MaskPhone} from "./maskPhone.js";

export const maskInputs = () => {
    const phoneInputs = document.querySelectorAll('.user-phone');
    const emailInputs = document.querySelectorAll('.user-email');
    const messageInputs = document.querySelectorAll('.user-message');
    const nameInputs = document.querySelectorAll('.user-name');

    phoneInputs.forEach(item => new MaskPhone(item, 'rus'));
    emailInputs.forEach(item => {
        item.addEventListener('input', (e) => e.target.value = e.target.value.replace(/[^a-z@0-9\-._]/ig, ''));
    });
    messageInputs.forEach(item => {
        item.addEventListener('input', (e) => e.target.value = e.target.value.replace(/[^a-zа-я.,\- 0-9]/ig, ''));
    });
    nameInputs.forEach(item => {
        item.addEventListener('input', (e) => e.target.value = e.target.value.replace(/[^a-zа-я.,\- ]/ig, ''));
    });
};