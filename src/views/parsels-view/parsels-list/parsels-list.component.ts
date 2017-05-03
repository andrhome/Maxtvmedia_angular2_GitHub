import { Component, OnInit, OnChanges } from '@angular/core';
import { ParselsListHttpService } from "./parsels-list-http.service";
import { ParselsList } from "./parsels-list";
// import { CreateIncomingParselComponent } from "./create-parsel/create-incoming-parsel.component";

@Component({
    selector: 'parselsListView',
    templateUrl: 'parsels-list.template.html',
    providers: [ParselsListHttpService]
})
export class ParselsListComponent implements OnInit, OnChanges {

    parselsList: ParselsList[] = [];
    error: any;

    constructor(private http: ParselsListHttpService) {}

    ngOnInit() {
        this.http.getData().subscribe(
                data => this.parselsList = data,
                error => { this.error = error; console.log(error) }
            );
    }

    ngOnChanges() {
        console.log('Parsels List: ' + this.parselsList);
    }

    addIncomingParsel(recepient: string, deliveredby: string, pieces: [number, string]) {
        this.parselsList.push(new ParselsList({
                recepient: recepient,
                received: "-",
                receivedFrom: deliveredby,
                pickedUp: "-",
                pieces: pieces,
                status: "Received"
            }));
    }
}
