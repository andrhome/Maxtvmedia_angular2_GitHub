import { Component, OnInit, Input } from '@angular/core';

declare var jQuery:any;

@Component({
    selector: 'create-incoming-parsel',
    templateUrl: 'create-parsel.template.html'
})
export class CreateIncomingParselComponent implements OnInit {

    ngOnInit() {
        jQuery(document).ready(function() {
            // Select2 init
            jQuery('.select2').select2({allowClear: true});
        });
    }




    // @Input() recepient: string;
    // @Input() deliveredBy: string;
    // @Input() pieces: [number, string];
    // @Input() receivedDate: string;
    // @Input() receivedFrom: string;
    // @Input() pickedUpDate: string;
    // @Input() status: string;
    //

    // @Input() parselObject: Object;
    //
    // addIncomingParsel(recepient: string, deliveredBy: string, pieces: [number, string]) :void {
    //     this.parselObject = {
    //         recepient: recepient,
    //         deliveredBy: deliveredBy,
    //         pieces: pieces
    //     };
    //
    //     console.log(this.parselObject);
    // }
}
