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

    constructor(private http: ParselsListHttpService) {}

    parselsList: ParselType[] = [];
    error: any;
    isShow: boolean;
    newParselItem: ParselType;
    currentItem: ParselType;
    editParselId: number;
    editMode: boolean = false;
    popupMode: boolean = false;

    ngOnInit() {
        this.initParselsList();
    }

    initParselsList: Function = function () {
        this.http.getData().subscribe(
            data => this.parselsList = data,
            error => { this.error = error; console.log(error) }
        );
    };

    showAddingForm() {
        this.isShow = true;
    }

    hideAddingForm() {
        this.isShow = false;
    }


    // setNewParsel() {
    //     this.newParselItem = null;
    // }

    // Adding new parsel
    addIncomingParsel() {
        // this.parselsList.push(item);
        console.log();
        this.hideAddingForm();
    }
    //
    // // Update current edit parsel
    // setCurrentEditParsel(index: number) {
    //     this.editMode = true;
    //
    //     this.currentItem = Object.assign({}, this.parselsList.find((item) => {
    //         return item.id === index;
    //     }));
    //     this.editParselId = index;
    // }
    //
    // // Save changes for current parsel
    // editIncominParsel() {
    //     this.popupMode = false;
    //     this.parselsList[this.editParselId - 1] = this.currentItem;
    //     console.log('Current Item: ', this.currentItem);
    //     console.log('ParselList obj: ', this.parselsList[this.editParselId - 1]);
    // }
}
