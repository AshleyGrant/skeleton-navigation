import {inject, customElement, bindable} from 'aurelia-framework';
import $ from 'jquery';
import select2 from 'select2';

@customElement('select-two')
@inject(Element)
export class Select2 {
    @bindable items = null;
    @bindable caption = null;
    @bindable value = null;

    constructor(element) {
        this.element = element;
    }

    bind() {
        var select = this.element.firstElementChild;

        var options = {
            placeholder: this.caption,
            allowClear: true
        };

        const $select = $(select);
        $select.css('width', '100%');
        this.select2 = $select.select2(options);
    }

    attached() {
        this.valueChanged(this.value);
    }

    valueChanged(newValue, oldValue) {
        if (newValue === undefined) {
            throw new Error('Do not use undefined!');
        }

        var newValueNumber = Number(newValue);
        var newValueInt = parseInt(newValueNumber, 10);

        if (isNaN(newValueInt) || newValueInt !== newValueNumber) {
            throw new Error('Item Id must be null or an intiger!');
        }

        if (newValueInt !== Number(oldValue)) {
            this.select2.select2('val', newValueInt);
            this.element.dispatchEvent(new Event("change"));
        }
    }
}
