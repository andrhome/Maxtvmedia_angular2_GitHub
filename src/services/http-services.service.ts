import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Response} from '@angular/http';
import {ParselType} from '../assets/types/parsel-type';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const url: string = 'http://maxtvmedia.requestumdemo.com/api';

@Injectable()
export class HttpService {


    constructor(private http: Http) { }

    createAuthorizationHeader(headers: Headers) {
        headers.append('Content-Type', 'application/json;charset=utf-8');
        headers.append('Authorization', 'Bearer MjI2Nzc3ZTUzZTNlNjdiNmY0OGNiZmU1MTNkYmEyZTg1ZDUyODIzY2EzZjFlZDUyY2E4ZmQ4MDllNGVlYWFjNQ');
    }

    getDataList(): Observable<ParselType[]> {

        let headers = new Headers();
        this.createAuthorizationHeader(headers);

        let options = new RequestOptions({headers: headers});

        // 'http://maxtvmedia.requestumdemo.com/api/v1/parcels'
        return this.http.get(`${url}/v1/parcels`, options)
            .map((resp: Response) => resp.json())
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    getBuilds() {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);

        let options = new RequestOptions({headers: headers});

        return this.http.get(`${url}/v1/buildings`, options)
            .map((resp: Response) => resp.json())
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    getSuites(id: number) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);

        let options = new RequestOptions({headers: headers});

        return this.http.get(`${url}/v1/suites/building/${id}`, options)
            .map((resp: Response) => resp.json())
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    getResidents() {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);

        let options = new RequestOptions({headers: headers});

        return this.http.get(`${url}/v1/residents`, options)
            .map((resp: Response) => resp.json())
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    addItem(item: ParselType): Observable<ParselType> {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);

        let options = new RequestOptions({headers: headers});

        return this.http.post(`${url}/v1/parcels`, {
            // suite: ,
            // resident: ,
            // parcelPostService: ,
            // numberPieces: ,
            // parcelType: ,
            // deliveryAddress: ,
            // notes: ,
            // inOut: ,
            // description: ,
        }, options)
            .map((resp: Response) => resp.json())
            .catch((error: any) => {
                return Observable.throw(error)
            });
    }

    editItem() {

    }
}
