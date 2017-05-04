import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
// import { ParselsList } from "../../../../assets/types/parsels-list";

declare var jQuery:any;

@Component({
    selector: 'create-incoming-parsel',
    templateUrl: 'create-parsel.template.html'
})
export class CreateIncomingParselComponent implements OnInit {
    // @Input() editMode: boolean;
    // @Input() dataParsel: ParselsList;
    // @Output() onEdit = new EventEmitter();
    // parsel: ParselsList = this.dataParsel ? this.dataParsel ;
    // @Output() onAdd = new EventEmitter();
    //
    ngOnInit() {
        jQuery(document).ready(function() {
            // Select2 init
            // jQuery('.select2').select2({allowClear: true});
        });
    }
    //
    // addIncomingFunc() {
    //     console.log(this.parsel);
    //     this.onAdd.emit(this.parsel);
    //     // this.newParsel.id = 10;
    //     // this.newParsel.recepient = recepient;
    //     // this.newParsel.received = "-";
    //     // this.newParsel.deliveredby = deliveredby;
    //     // this.newParsel.pickedup = "-";
    //     // this.newParsel.pieces = pieces;
    //     // this.newParsel.status = "Received";
    // }
    //
    // editIncomingFunc() {
    //     this.onEdit.emit();
    // }
}
