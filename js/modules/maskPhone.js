export class MaskPhone {
    constructor(element, country = 'rus') {
        try {
            this.element = element;
            this.country = country;
            this.masks = this.getMasks();
            if (!this.element) {
                throw new Error('Masked element is underfined');
            }
        } catch (error) {
            console.error(error);
        }
        this.init();

    }
    countryMasks = {
        'rus': [
            '+7(___)___-__-__',
            '8(___)___-__-__'
        ],
        'bel': [
            '+375(__)___-__-__',
            '8(___)___-__-__'
        ],
    };
    getMasks() {
        if (this.country && this.countryMasks[this.country]) {
            return this.countryMasks[this.country];
        }
        return this.countryMasks['rus'];
    }
    selectMask(event) {
        const target = event.target;
        if(!this.flag){
            const currentMask = this.masks.find(item => item[0] === target.value);
            if (currentMask){
                this.maskPhone(this.element, currentMask);
                this.flag = true;
                let event = new Event("focus");
                this.element.dispatchEvent(event);
            } else {
                target.value = '';
            }
        }
    }
    init() {
        this.flag = false;
        this.element.addEventListener('input', (e) => {
            this.selectMask(e);
        });
    }
    maskPhone(element, masked = '+7 (___) ___-__-__') {
        function mask(event) {
            const keyCode = event.keyCode;
            const template = masked,
                def = template.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, "");
            let i = 0,
                newValue = template.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
                });
            i = newValue.indexOf("_");
            if (i != -1) {
                newValue = newValue.slice(0, i);
            }
            let reg = template.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}";
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
                this.value = newValue;
            }
            if (event.type == "blur" && this.value.length < 5) {
                this.value = "";
            }

        }
        element.addEventListener("input", mask);
        element.addEventListener("focus", mask);
        element.addEventListener("blur", mask);

    }
}