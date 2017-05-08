import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const BASE_URL: string = 'http://maxtvmedia.requestumdemo.com/api';

@Injectable()
export class HttpService {

    constructor(private http: Http) { }

    createAuthorizationHeader(headers: Headers) {
        headers.append('Content-Type', 'application/json;charset=utf-8');
        headers.append('Authorization', 'Bearer MjI2Nzc3ZTUzZTNlNjdiNmY0OGNiZmU1MTNkYmEyZTg1ZDUyODIzY2EzZjFlZDUyY2E4ZmQ4MDllNGVlYWFjNQ');
    }

    getData(url: string) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);

        let options = new RequestOptions({headers: headers});

        return this.http.get(url, options)
            .map((resp: Response) => resp.json())
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    addItem(data) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);

        let options = new RequestOptions({headers: headers});

        return this.http.post(`${BASE_URL}/v1/parcels`, {
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

    editItem() {

    }
}
