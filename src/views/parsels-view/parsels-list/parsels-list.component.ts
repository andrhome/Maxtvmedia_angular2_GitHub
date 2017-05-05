import { Component, OnInit } from '@angular/core';
import { ParselsListHttpService } from "./parsels-list-http.service";
import { ParselType } from "../../../assets/types/parsel-type";
import { AddingFormComponent } from '../../../components/adding-form-component/adding-form.component';

@Component({
    selector: 'parselsListView',
    templateUrl: 'parsels-list.template.html',
    providers: [ParselsListHttpService, AddingFormComponent]
})
export class ParselsListComponent implements OnInit {
    parselsList: ParselType[] = [];
    error: any;

    constructor(private http: ParselsListHttpService) {}

    ngOnInit() {
        this.initParselsList();
    }

    initParselsList: Function = function () {
        this.http.getData().subscribe(
            data => { this.parselsList = data; console.log(data); },
            error => { this.error = error; console.error(error); }
        );
    };

    addIncomingParsel(item: ParselType) {
        // this.http.addItem(item).subscribe(
        //     data => { console.log(data); },
        //     error => { console.error(error); }
        // );
        this.parselsList.push(item);
    }
}
