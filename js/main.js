import { modalInstance } from "./modules/modal.js";
import { slidersInit } from "./modules/slidersInit.js";
import { menuToggle } from "./modules/menuToggle.js";
import { formListener } from "./modules/formListener.js";
import {maskInputs} from "./modules/maskInput.js";

document.addEventListener('DOMContentLoaded', () => {
    //bind popup
    const modalPopup = document.querySelector('.modal');
    const modal = modalInstance({
        modal: modalPopup,
    });

    //init sliders
    slidersInit();

    //init toggle menu
    menuToggle();

    //init send form
    formListener();

    maskInputs();
    AOS.init();
});

