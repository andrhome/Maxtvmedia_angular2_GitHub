import { Component, OnInit } from '@angular/core';
import { ParselsListHttpService } from "./parsels-list-http.service";
import { ParselsList } from "./parsels-list";

@Component({
    selector: 'parselsListView',
    templateUrl: 'parsels-list.template.html',
    providers: [ParselsListHttpService]
})
export class ParselsListComponent implements OnInit {

    constructor(private http: ParselsListHttpService) {}

    parselsList: ParselsList[] = [];
    error: any;
    currentItem: ParselsList;
    editParselId: number;

    initParselsList: Function = function () {
        this.http.getData().subscribe(
            data => this.parselsList = data,
            error => { this.error = error; console.log(error) }
        );
    };

    ngOnInit() {
        this.initParselsList();
    }

    // Adding new parsel
    // addIncomingParsel(recepient: string, deliveredby: string, pieces: [number, string]) {
    //     let parselItem: ParselsList;
    //     parselItem.recepient = recepient;
    //     parselItem.received = "-";
    //     parselItem.deliveredby = deliveredby;
    //     parselItem.pickedup = "-";
    //     parselItem.pieces = pieces;
    //     parselItem.status = "Received";
    // }

    // Update current edit parsel
    setCurrentEditParsel(index: number) {
        this.currentItem = Object.assign({}, this.parselsList.find((item) => {
            return item.id === index;
        }));
        this.editParselId = index;
    }

    // Save changes for current parsel
    editIncominParsel() {
        this.parselsList[this.editParselId - 1] = this.currentItem;
        console.log('Current Item: ', this.currentItem);
        console.log('ParselList obj: ', this.parselsList[this.editParselId - 1]);
    }
}
