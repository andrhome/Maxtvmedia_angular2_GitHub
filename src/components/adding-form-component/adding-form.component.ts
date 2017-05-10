import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ParselType} from '../../assets/types/parsel-type';
import {HttpService} from "../../services/http-services.service";
import {GlobalVariables} from "../../app/global-variables";

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

    @Input() buildingsData: any = {};

    @Output() onSubmit: EventEmitter<Object> = new EventEmitter();

    currentBuild: any = {};
    currentSuite: any = {};

    suites: Object[] = [];
    residents: Object[] = [];
    postserviceId: number;
    parcelTypeId: number;

    private isShow: boolean = false;

    constructor(private http: HttpService) {  }

    public show() {
        this.isShow = true;

        if (this.editMode) {
            this.initEditMode();
        } else {
            this.initAddMode();
        }
    }

    public hide() {
        this.isShow = false;
    }

    public setDate() {
        let date = new Date(),
            day = date.getDate(),
            month = date.getMonth(),
            year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    public submit() {
        if (this.editMode) {
            this.onSubmit.emit({index: this.editItemIndex, item: this.parselItem});
        } else {
            this.onSubmit.emit({
                suite: this.currentSuite.id,
                resident: this.parselItem.firstName + ' ' + this.parselItem.lastName,
                parcelPostService: this.postserviceId,
                numberPieces: this.parselItem.numberPieces,
                parcelType: this.parcelTypeId,
                deliveryAddress: this.parselItem.deliveryAddress,
                notes: this.parselItem.notes,
                inOut: 0,
                description: this.parselItem.description
            });
        }

        this.hide();
    }

    private initEditMode() {
        console.log(this.parselItem);
    }

    private initAddMode() {
        this.currentBuild = this.buildingsData.buildings[0];

        this.suites = this.getSuitesByBuildingId(this.currentBuild.id);

        this.currentSuite = this.suites[0];

        this.getResidentsBySuiteIdAndInit(this.currentSuite.id);
    }

    private getSuitesByBuildingId(buildingId) {
        let result = [];

        this.buildingsData.suites.forEach((item) => {
            if (item.building === buildingId) {
                result.push(item);
            }
        });

        return result;
    }

    private getResidentsBySuiteIdAndInit(suiteId) {
        const RESIDENTS_URL: string = `${GlobalVariables.BASE_URL}/v1/suites/residents/${suiteId}`;

        this.http.getData(RESIDENTS_URL).subscribe(
            data => {
                this.residents = data;
            }
        );
    }
}
