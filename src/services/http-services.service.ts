import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {GlobalVariables} from "../app/global-variables";

// let token: string = 'Bearer MjI2Nzc3ZTUzZTNlNjdiNmY0OGNiZmU1MTNkYmEyZTg1ZDUyODIzY2EzZjFlZDUyY2E4ZmQ4MDllNGVlYWFjNQ';
let headers: Headers = new Headers();

@Injectable()
export class HttpService {

    constructor(private http: Http) {
    }

    getData(url: string) {
        let options = new RequestOptions({headers: headers});
        return this.http.get(url, options)
            .map((resp: Response) => resp.json())
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    addItem(data) {
        let options = new RequestOptions({headers: headers});

        return this.http.post(`${GlobalVariables.BASE_URL}/v1/parcels`, {
            suite: data.suite,
            resident: data.resident,
            parcelPostService: data.parcelPostService,
            numberPieces: data.numberPieces,
            parcelType: data.parcelType,
            deliveryAddress: data.deliveryAddress,
            notes: data.notes,
            inOut: data.inOut,
            description: data.description
        }, options)
            .map((resp: Response) => resp.json())
            .catch((error: any) => {
                return Observable.throw(error)
            });
    }

    getToken() {
    	  let userData = JSON.parse(window.sessionStorage.getItem('user-data'));

        return this.http.post(`${GlobalVariables.BASE_URL}/security/login`, {
            email: userData.email,
            password: userData.password
        })
            .map((res: Response) => res.json());
    }

    setToken(token) {
        token = `Bearer ${token}`;
        headers.append('Authorization', token);
    }

    editItem() {

    }
}
