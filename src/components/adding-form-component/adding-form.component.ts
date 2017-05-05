import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ParselType} from '../../assets/types/parsel-type';

@Component({
    selector: 'adding-form',
    templateUrl: 'adding-form.template.html'
})
export class AddingFormComponent {
    @Input() title: string = '';
    @Input() editMode: boolean = false;
    @Input() editItemIndex: number;
    @Input() parselItem: ParselType = new ParselType();

    @Output() onSubmit: EventEmitter<Object> = new EventEmitter();

    private isShow: boolean = false;

    constructor() {

    }

    public show() {
        this.isShow = true;
    }

    public hide() {
        this.isShow = false;
    }

    public submit() {
        if (this.editMode) {
            this.onSubmit.emit({index: this.editItemIndex, item: this.parselItem});
        } else {
            this.onSubmit.emit({item: this.parselItem});
        }

        this.hide();
    }
}
