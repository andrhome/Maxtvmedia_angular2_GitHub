import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Response } from '@angular/http';
import { ParselType } from '../../../assets/types/parsel-type';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ParselsListHttpService {

    constructor(private http: Http) { }

    createAuthorizationHeader(headers: Headers) {
        headers.append('Content-Type', 'application/json;charset=utf-8');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Authorization', 'Bearer MGFlYjViOWRhNTQ2YjliY2VmOGJlOTUxNzdhMWEzYTlkNjA1M2Q1YjZkY2FhZjI0MzViYjFkODU3YTE1N2NlZg');
    }

    getData() : Observable<ParselType[]>{

        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        console.log('Headers: ', headers);

        let options = new RequestOptions({ headers: headers });

        // 'http://maxtvmedia.requestumdemo.com/api/v1/parcels'
        return this.http.get('http://maxtvmedia.requestumdemo.com/parcels.json', options)
            .map((resp: Response) => resp.json())
            .catch((error: any) => { return Observable.throw(error) });
    }

    postData(obj: ParselType) : Observable<ParselType[]>{
        const body = JSON.stringify(obj);

        let headers = new Headers();
        this.createAuthorizationHeader(headers);

        let options = new RequestOptions({ headers: headers });

        return this.http.post('parsels-list.json', body, options)
            .map((resp: Response) => resp.json())
            .catch((error: any) => { return Observable.throw(error) });
    }
}
