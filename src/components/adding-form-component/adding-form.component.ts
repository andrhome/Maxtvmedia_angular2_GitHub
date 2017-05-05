import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'adding-form',
    templateUrl: 'adding-form.template.html'
})
export class AddingFormComponent {
    @Input() onSubmitCallback() {}
    @Input() isShow: boolean = false;

    constructor () { }

    @Output() onShow = new EventEmitter();
    show() {
        this.onShow.emit();
        this.isShow = true;
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
