import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ParselType } from "./parsel-type";

@Component({
    selector: 'parselTypeView',
    templateUrl: 'parsel-type.template.html',
})
export class ParselTypeComponent implements OnInit{

    parsels: ParselType[] = [];

    constructor() {}

    ngOnInit() {
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
