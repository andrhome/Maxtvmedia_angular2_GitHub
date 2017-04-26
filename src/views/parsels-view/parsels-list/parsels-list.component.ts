import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { GetHttpService } from "../services/get-http.service";
import { ParselsList } from "./parsels-list";

@Component({
    selector: 'parselsListView',
    templateUrl: 'parsels-list.template.html',
    providers: [GetHttpService]
})
export class ParselsListComponent implements OnInit {

    parselsList: ParselsList[] = [];

    constructor(private http: GetHttpService) {}

    ngOnInit() {
        this.http.getData('parsels-list.json').subscribe((data: Response) => this.parselsList = data.json());
    }
}
