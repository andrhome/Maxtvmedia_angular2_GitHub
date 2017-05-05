import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { GetHttpService } from "../services/get-http.service";
import { ParselType } from "./parsel-type";

@Component({
    selector: 'parselTypeView',
    templateUrl: 'parsel-type.template.html',
    providers: [GetHttpService]
})
export class ParselTypeComponent implements OnInit{

    parsels: ParselType[] = [];

    constructor(private httpService: GetHttpService) {}

    ngOnInit() {
        this.httpService.getData('parsel-type.json').subscribe((data: Response) => this.parsels = data.json());
    }

    // Create a Parsel Type
    createConditions: boolean = false;

    createParselType() {
        this.createConditions = true;
    }

    parselTypeName: string;

    saveParselType(parselType: Object) {
        this.parsels.push(new ParselType(parselType));

        this.parselTypeName = '';

        this.createConditions = false;
    }
}
