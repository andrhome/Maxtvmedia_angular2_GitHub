import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ParselType} from '../../assets/types/parsel-type';
import {HttpService} from "../../services/http-services.service";
import {GlobalVariables} from "../../app/global-variables";

const BUILDINGS_URL: string = `${GlobalVariables.BASE_URL}/v1/buildings`;
const SUITES_URL: string = `${GlobalVariables.BASE_URL}/v1/suites`;
const RESIDENTS_URL: string = `${GlobalVariables.BASE_URL}/v1/residents`;
const RESIDENTS_BY_SUITE_URL: string = `${GlobalVariables.BASE_URL}/v1/suites/residents`;
const POSTSERVICES_URL: string = `${GlobalVariables.BASE_URL}/v1/post-services`;
const PARSELTYPES_URL: string = `${GlobalVariables.BASE_URL}/v1/parcel-types`;

@Component({
	selector: 'adding-form',
	templateUrl: 'adding-form.template.html'
})
export class AddingFormComponent {
	@Input() title: string = '';
	@Input() editMode: boolean = false;
	@Input() parselItem: ParselType = new ParselType();
	@Output() onSubmit: EventEmitter<Object> = new EventEmitter();

	private isShow: boolean = false;

	buildingsData: any = {
		buildings: [],
		suites: [],
		residents: [],
		postservices: [],
		parseltypes: []
	};

	currentBuild: any = {};
	currentSuite: any = {};
	currentResident: any = {};
	currentPostservices: any = {};
	currentParcelType: any = {};

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
			this.onSubmit.emit({
				id: this.parselItem.id,
				item: {
					patch: {
						suite: this.currentSuite.id,
						resident: this.currentResident.id,
						parcelPostService: this.currentPostservices.id,
						numberPieces: this.parselItem.numberPieces,
						parcelType: this.currentParcelType.id,
						deliveryAddress: this.parselItem.deliveryAddress,
						notes: this.parselItem.notes,
						inOut: 0,
						description: this.parselItem.description
					}
				}
			});
		} else {
			this.onSubmit.emit({
				post: {
					suite: this.currentSuite.id,
					resident: this.currentResident.id,
					parcelPostService: this.currentPostservices.id,
					numberPieces: this.parselItem.numberPieces,
					parcelType: this.currentParcelType.id,
					deliveryAddress: this.parselItem.deliveryAddress,
					notes: this.parselItem.notes,
					inOut: 0,
					description: this.parselItem.description
				}
			});
		}

		this.hide();
	}

	private initEditMode() {
		this.http.getData(`${GlobalVariables.BASE_URL}/v1/parcels/${this.parselItem.id}`).subscribe(
			parcelsResult => {
				// Set delivery address
				this.parselItem.deliveryAddress = parcelsResult.delivery_address;

				// Set pieces number
				this.parselItem.numberPieces = parcelsResult.number_pieces;

				// Set notes
				this.parselItem.notes = parcelsResult.notes;

				// Set description
				this.parselItem.description = parcelsResult.description;

				// Get parcel type
				this.getParselTypes((parselTypesData) => {
					// Set current parcel type
					this.currentParcelType = parselTypesData.find((item) => {
						return parcelsResult.parcel_type.id == item.id;
					});
				});

				// Get post services
				this.getPostServices((postServicesData) => {
					// Set current post services
					this.currentPostservices = postServicesData.find((item) => {
						return parcelsResult.parcel_post_service.id == item.id;
					});
				});

				// Get buildings
				this.http.getData(BUILDINGS_URL).subscribe(
					buildingsResult => {
						// Set buildings list
						this.buildingsData.buildings = buildingsResult;

						// Get current suite
						this.http.getData(`${GlobalVariables.BASE_URL}/v1/suites/${parcelsResult.suite}`).subscribe(
							suiteResult => {
								// Set current build
								console.log(this.buildingsData.buildings);
								this.currentBuild = this.buildingsData.buildings.find((item) => {
									return suiteResult.building == item.id;
								});

								this.http.getData(SUITES_URL + `/building/${this.currentBuild.id}`).subscribe(
									suiteListResult => {
										this.buildingsData.suites = suiteListResult;

										// Set current suite
										this.currentSuite = this.buildingsData.suites.find((item) => {
											return suiteResult.id == item.id;
										});

										// Get residents list
										this.http.getData(RESIDENTS_BY_SUITE_URL + `/${this.currentSuite.id}`).subscribe(
											residentsResult => {
												this.buildingsData.residents = residentsResult;

												// Set current resident
												this.currentResident = this.buildingsData.residents.find((item) => {
													return parcelsResult.resident.id == item.id;
												});
											}
										);
									}
								);
							}
						);
					}
				);
			}
		);
	}

	private initAddMode() {
		this.http.getData(BUILDINGS_URL).subscribe(
			data => {
				this.buildingsData.buildings = data;

				this.currentBuild = this.buildingsData.buildings[0];

				this.http.getData(SUITES_URL + `/building/${this.currentBuild.id}`).subscribe(
					data => {
						this.buildingsData.suites = data;

						this.currentSuite = this.buildingsData.suites[0];

						this.http.getData(RESIDENTS_BY_SUITE_URL + `/${this.currentSuite.id}`).subscribe(
							data => {
								this.buildingsData.residents = data;

								this.currentResident = this.buildingsData.residents[0];
							}
						);
					}
				);
			}
		);

		this.getPostServices((data) => {
			this.currentPostservices = data[0];
		});

		this.getParselTypes((data) => {
			this.currentParcelType = data[0];
		});
	}

	private getParselTypes(callback: Function) {
		this.http.getData(PARSELTYPES_URL).subscribe(
			data => {
				this.buildingsData.parseltypes = data;

				if (callback) {
					callback(data);
				}
			}
		);
	}

	private getPostServices(callback: Function) {
		this.http.getData(POSTSERVICES_URL).subscribe(
			data => {
				this.buildingsData.postservices = data;

				if (callback) {
					callback(data);
				}
			}
		);
	}

	changeBuilding(newBuild) {
		this.http.getData(SUITES_URL + `/building/${newBuild.id}`).subscribe(
			suiteListResult => {
				this.buildingsData.suites = suiteListResult;

				// Set current suite
				this.currentSuite = this.buildingsData.suites[0];

				// Get residents list
				this.http.getData(RESIDENTS_BY_SUITE_URL + `/${this.currentSuite.id}`).subscribe(
					residentsResult => {
						this.buildingsData.residents = residentsResult;

						// Set current resident
						this.currentResident = this.buildingsData.residents[0];
					}
				);
			}
		);
	}

	changeSuite(newSuite) {
		this.http.getData(RESIDENTS_BY_SUITE_URL + `/${newSuite.id}`).subscribe(
			residentsResult => {
				this.buildingsData.residents = residentsResult;

				// Set current resident
				this.currentResident = this.buildingsData.residents[0];
			}
		);
	}
}
