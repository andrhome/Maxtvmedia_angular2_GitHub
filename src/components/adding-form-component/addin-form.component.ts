import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'adding-form',
    templateUrl: 'adding-form.template.html'
})
export class AddingFormComponent {
    @Input() onSubmitCallback() {}

    private isShow: boolean = false;

    constructor () {

    }

    @Output() onChanged = new EventEmitter<boolean>();
    show() {
        this.onChanged.emit();
    }

    // public show() {
    //     this.isShow = true;
    // }

    public hide() {
        this.isShow = false;
    }

    private submit() {
        this.onSubmitCallback();
        this.hide();
    }
}
