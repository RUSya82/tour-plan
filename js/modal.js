export class Modal {
    constructor({
                    modalClassName = 'modal',
                    buttonsClassName = 'modal-activator',
                    modalActiveClass = 'modal--active',
                    modalContentClass = 'modal-content',
                    buttonCloseClass = 'modal-close',
                }) {
        this.modal = document.querySelector('.' + modalClassName);
        this.modalActivators = document.querySelectorAll('.' + buttonsClassName);
        this.modalActiveClass = modalActiveClass;
        this.modalContentClass = modalContentClass;
        this.buttonCloseClass = buttonCloseClass;
        this.modalClassName = modalClassName;
        this.init();
    }

    init() {
        this.addListener();
    }

    addListener() {
        this.modalActivators.forEach(activator => {
            activator.addEventListener('click', (e) => {
                e.preventDefault();
                this.openModal()
            });
        });
        this.modal.addEventListener('click', (e) => {
            console.log(this.modalContentClass)
            const isModal = e.target.closest(`.${this.modalContentClass}`);
            const isCloseBtn = e.target.closest(`.${this.buttonCloseClass}`);
            if (!isModal || isCloseBtn) {
                this.closeModal();
            }
        });
        document.addEventListener('keydown', (event) =>  {
            if (event.key === 'Escape') {
                const activeModal = document.querySelector(`.${this.modalClassName}.${this.modalActiveClass}`);
                if (activeModal) {
                    this.closeModal();
                }
            }
        });
    }

    openModal(callback = this.blockBody.bind(this)) {
        this.modal.classList.add(this.modalActiveClass);
        callback();
    }

    closeModal(callBack = this.unBlockBody.bind(this)) {
        this.modal.classList.remove(this.modalActiveClass);
        callBack();
    }

    calcScroll() {
        let div = document.createElement('div');
        div.style.width = '500px';
        div.style.height = '500px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';
        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
    }

    toggleLockBody() {
        const body = document.body;
        body.classList.toggle('lock');
        const bodyScroll = this.calcScroll();
        if (body.classList.contains('lock')) {
            body.style.marginRight = `${bodyScroll}px`;
        } else {
            body.style.marginRight = `0`;
        }
    }

    blockBody() {
        const body = document.body;
        body.style.overflow = 'hidden';
        const bodyScroll = this.calcScroll();
        body.style.marginRight = `${bodyScroll}px`;
    }

    unBlockBody() {
        setTimeout(() => {
            const body = document.body;
            body.style.overflow = 'auto';
            body.style.marginRight = `0`;
        }, 200)
    }
}