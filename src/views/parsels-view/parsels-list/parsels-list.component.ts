import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../../services/http-services.service";
import { ParselType } from "../../../assets/types/parsel-type";
import { AddingFormComponent } from '../../../components/adding-form-component/adding-form.component';
import { GlobalVariables } from "../../../app/global-variables";

let token: string = null;

const PARSELS_URL: string = `${GlobalVariables.BASE_URL}/v1/parcels`;
const BUILDINGS_URL: string = `${GlobalVariables.BASE_URL}/v1/buildings`;
const SUITES_URL: string = `${GlobalVariables.BASE_URL}/v1/suites`;
const RESIDENTS_URL: string = `${GlobalVariables.BASE_URL}/v1/residents`;
const POSTSERVICES_URL: string = `${GlobalVariables.BASE_URL}/v1/post-services`;
const PARSELTYPES_URL: string = `${GlobalVariables.BASE_URL}/v1/parcel-types`;

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
        postservices: [],
        parseltypes: []
    };

    constructor(private http: HttpService) {}

    ngOnInit() {
        if (token) {
            this.initParselsList();

            this.initData();
        } else {
            this.http.getToken().subscribe(
                data => {
                    token = data.access_token;
                    this.http.setToken(token);
                    this.initParselsList();
                    this.initData();
                }
            );
        }
    }

    initParselsList: Function = function () {
        this.http.getData(PARSELS_URL).subscribe(
            data => { this.parselsList = data; console.log('Parsels list: ', data); },
            error => { this.error = error; console.error(error); }
        );
    };

    addIncomingParsel(item) {
        console.log('ITEM: ', item);
        this.http.addItem(item).subscribe(
            data => {
                console.log(data, 'data');
            },
            error => { console.error(error); }
        );
    }

    private initData() {
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
        );

        this.http.getData(POSTSERVICES_URL).subscribe(
            data => {
                this.buildingsData.postservices = data;
            }
        );

        this.http.getData(PARSELTYPES_URL).subscribe(
            data => {
                this.buildingsData.parseltypes = data;
                console.log('this.parseltypes: ', this.buildingsData.parseltypes);
            }
        );
    }
}
