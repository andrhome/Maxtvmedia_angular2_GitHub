import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../../services/http-services.service";
import { ParselType } from "../../../assets/types/parsel-type";
import { AddingFormComponent } from '../../../components/adding-form-component/adding-form.component';

@Component({
    selector: 'parselsListView',
    templateUrl: 'parsels-list.template.html',
    providers: [HttpService, AddingFormComponent]
})
export class ParselsListComponent implements OnInit {
    parselsList: ParselType[] = [];
    error: any;

    constructor(private http: HttpService) {}

    ngOnInit() {
        this.initParselsList();
    }

    initParselsList: Function = function () {
        this.http.getDataList().subscribe(
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
