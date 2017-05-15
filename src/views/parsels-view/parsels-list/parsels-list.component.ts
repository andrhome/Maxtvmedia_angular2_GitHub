import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../../services/http-services.service";
import { ParselType } from "../../../assets/types/parsel-type";
import { GlobalVariables } from "../../../app/global-variables";

let token: string = window.sessionStorage.getItem('token');

const PARSELS_URL: string = `${GlobalVariables.BASE_URL}/v1/parcels`;

@Component({
    selector: 'parcelsListView',
    templateUrl: 'parsels-list.template.html',
    providers: [HttpService]
})
export class ParselsListComponent implements OnInit {
    parselsList: ParselType[] = [];
    error: any;

    constructor(private http: HttpService) {}

    ngOnInit() {
        if (!token) {
            token = window.sessionStorage.getItem('token');
        }

        this.initParselsList();
    }

    initParselsList: Function = function () {
        this.http.getData(PARSELS_URL).subscribe(
            data => { this.parselsList = data; console.log('Parsels list: ', data); },
            error => { this.error = error; console.error(error); }
        );
    };

    addIncomingParsel(item) {
        this.http.addItem(item).subscribe(
            data => {
                this.initParselsList();
                console.log('Init parsels list');
            },
            error => { console.error(error); }
        );
    }
}
