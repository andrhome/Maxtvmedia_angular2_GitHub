import {Component, Input, Output, EventEmitter} from '@angular/core';
import { ParselType } from '../../assets/types/parsel-type';
import {HttpService} from "../../services/http-services.service";

@Component({
    selector: 'list-comp',
    templateUrl: 'list.template.html'
})
export class ListComponent {
    @Input() dataList: ParselType;
    @Input() error: any;

    @Output() onInitList: EventEmitter<Object> = new EventEmitter();

    constructor (private http: HttpService) { }

    editParselItem (data) {
        this.http.editItem(data.id, data.item).subscribe(
          data => {
              this.onInitList.emit();
          },
          error => { console.error(error); }
        );
    }
}
