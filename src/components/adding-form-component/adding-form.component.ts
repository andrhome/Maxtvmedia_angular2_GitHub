import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ParselType} from '../../assets/types/parsel-type';
import {HttpService} from "../../services/http-services.service";

@Component({
    selector: 'adding-form',
    templateUrl: 'adding-form.template.html'
})
export class AddingFormComponent {
    @Input() title: string = '';
    @Input() editMode: boolean = false;
    @Input() editItemIndex: number;
    @Input() parselItem: ParselType = new ParselType();

    @Output() onSubmit: EventEmitter<Object> = new EventEmitter();

    buildings: Object = [];
    suites: Object = [];
    residents: Object = [];

    private isShow: boolean = false;

    constructor(private http: HttpService) {}

    public show() {
        this.isShow = true;

        this.http.getBuilds().subscribe(
            data => {
                this.buildings = data;

                this.http.getSuites(this.buildings[0].id).subscribe(
                    data => {
                        this.suites = data;

                        this.http.getResidents().subscribe(
                            data => {
                                this.residents = data;
                                console.log('Residents: ', this.residents);
                            }
                        )
                    }
                );
            }
        );
    }

    // getSuites() {
    //     this.http.getSuites().subscribe(
    //         data => { this.suites = data; console.log(data); }
    //     );
    // }

    public hide() {
        this.isShow = false;
    }

    public submit() {
        if (this.editMode) {
            this.onSubmit.emit({index: this.editItemIndex, item: this.parselItem});
        } else {
            this.onSubmit.emit({item: this.parselItem});
        }

        this.hide();
    }
}
