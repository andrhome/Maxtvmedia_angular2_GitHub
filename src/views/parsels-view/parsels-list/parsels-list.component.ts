import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../../services/http-services.service";
import { ParselType } from "../../../assets/types/parsel-type";
import { AddingFormComponent } from '../../../components/adding-form-component/adding-form.component';

const BASE_URL: string = 'http://maxtvmedia.requestumdemo.com/api';
const PARSELS_URL: string = `${BASE_URL}/v1/parcels`;
const BUILDINGS_URL: string = `${BASE_URL}/v1/buildings`;
const SUITES_URL: string = `${BASE_URL}/v1/suites`;
const RESIDENTS_URL: string = `${BASE_URL}/v1/residents`;

@Component({
    selector: 'parselsListView',
    templateUrl: 'parsels-list.template.html',
    providers: [HttpService, AddingFormComponent]
})
export class ParselsListComponent implements OnInit {
    parselsList: ParselType[] = [];
    error: any;

    buildingsData: any = {
        buildings: [],
        suites: [],
        residents: [],
    };

    constructor(private http: HttpService) {}

    ngOnInit() {
        this.initParselsList();

        this.http.getData(BUILDINGS_URL).subscribe(
            data => {
                this.buildingsData.buildings = data;
            }
        );

        this.http.getData(SUITES_URL).subscribe(
            data => {
                this.buildingsData.suites = data;
            }
        );

        this.http.getData(RESIDENTS_URL).subscribe(
            data => {
                this.buildingsData.residents = data;
            }
        )
    }

    initParselsList: Function = function () {
        this.http.getData(PARSELS_URL).subscribe(
            data => { this.parselsList = data; console.log(data); },
            error => { this.error = error; console.error(error); }
        );
    };

    addIncomingParsel(item) {
        this.http.addItem(item).subscribe(
            data => {
                console.log(data, 'data');
            },
            error => { console.error(error); }
        );
    }
}
