import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ParselType} from '../../assets/types/parsel-type';
import {HttpService} from "../../services/http-services.service";

@Component({
    // moduleId: module.id,
    selector: 'adding-form',
    templateUrl: 'adding-form.template.html'
    // styleUrls: ['adding-form.style.css']
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
    buildId: number;
    suiteId: number;

    private isShow: boolean = false;

    constructor(private http: HttpService) {}

    public show() {
        this.isShow = true;

        this.http.getBuilds().subscribe(
            data => {
                this.buildings = data;
                console.log('Buildings: ', this.buildings);
                this.buildId = this.buildings[0].id;
                // console.log('this.buildId: ', this.buildId);

                this.http.getSuites(this.buildId).subscribe(
                    data => {
                        this.suites = data;
                        console.log('Suites: ', this.suites);
                        this.suiteId = this.suites[0].id;
                        // console.log('this.suiteId: ', this.suiteId);

                        this.http.getResidents(this.suiteId).subscribe(
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

    changeBuilding(id: number) {
        console.log('Build ID: ', id);
        // this.http.getSuites(id).subscribe(
        //     data => {
        //         this.suites = data;
        //
        //         this.http.getResidents(this.suites[0].id).subscribe(
        //             data => {
        //                 this.residents = data;
        //             }
        //         )
        //     }
        // );
    }

    changeSuite(id: number) {
        console.log('Suite ID: ', id);
        // this.http.getResidents(id).subscribe(
        //     data => {
        //         this.residents = data;
        //     }
        // )
    }

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
