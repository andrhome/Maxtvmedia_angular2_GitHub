import { Component, Input } from '@angular/core';
import { ParselType } from '../../assets/types/parsel-type';

@Component({
    selector: 'list-comp',
    templateUrl: 'list.template.html'
})
export class ListComponent {
    @Input() dataList: ParselType;
    @Input() error: any;

    editParselItem (index: number, updatedItem: ParselType) {
        this.dataList[index] = updatedItem;
    }
}
