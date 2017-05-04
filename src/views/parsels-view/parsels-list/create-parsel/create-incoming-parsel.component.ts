import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ParselsList } from "../parsels-list";

declare var jQuery:any;

@Component({
    selector: 'create-incoming-parsel',
    templateUrl: 'create-parsel.template.html'
})
export class CreateIncomingParselComponent implements OnInit {

    ngOnInit() {
        jQuery(document).ready(function() {
            // Select2 init
            // jQuery('.select2').select2({allowClear: true});
        });
    }

    // setCurentParsel(recepient: string, deliveredby: string, pieces: [number, string]) {
    //     this.dataParsel.recepient = recepient;
    //     this.dataParsel.deliveredby = deliveredby;
    //     this.dataParsel.pieces = pieces;
    // }

    @Input() dataParsel: ParselsList;

    @Output() onChanged = new EventEmitter();
    editIncomingFunc() {
        this.onChanged.emit();
    }
}
