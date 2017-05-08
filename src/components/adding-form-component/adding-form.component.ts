import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ParselType} from '../../assets/types/parsel-type';
import {HttpService} from "../../services/http-services.service";

const BASE_URL: string = 'http://maxtvmedia.requestumdemo.com/api';

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

    private isShow: boolean = false;

    constructor(private http: HttpService) {
    }

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

    public submit() {
        if (this.editMode) {
            this.onSubmit.emit({index: this.editItemIndex, item: this.parselItem});
        } else {
            this.onSubmit.emit({

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
        const RESIDENTS_URL: string = `${BASE_URL}/v1/suites/residents/${suiteId}`;

        this.http.getData(RESIDENTS_URL).subscribe(
            data => {
                this.residents = data;
            }
        );
    }
}
