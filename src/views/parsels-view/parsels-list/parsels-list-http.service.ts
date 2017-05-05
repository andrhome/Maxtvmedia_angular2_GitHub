import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Response} from '@angular/http';
import {ParselType} from '../../../assets/types/parsel-type';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ParselsListHttpService {

    constructor(private http: Http) {
    }

    createAuthorizationHeader(headers: Headers) {
        headers.append('Content-Type', 'application/json;charset=utf-8');
        headers.append('Authorization', 'Bearer MmM2YzIzYmU4NTFkMWVhMGNiZDEyNTllNzYxNzY0OWIxODg2OWEyNjg4ZjYwYzc2ZjFkMThmZTljMjVkYjQxNA');
    }

    getData(): Observable<ParselType[]> {

        let headers = new Headers();
        this.createAuthorizationHeader(headers);

        let options = new RequestOptions({headers: headers});

        // 'http://maxtvmedia.requestumdemo.com/api/v1/parcels'
        return this.http.get('http://maxtvmedia.requestumdemo.com/api/v1/parcels.json', options)
            .map((resp: Response) => resp.json())
            .catch((error: any) => {
                return Observable.throw(error)
            });
    }

    addItem(item: ParselType): Observable<ParselType> {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);

        let options = new RequestOptions({headers: headers});

        return this.http.post('http://maxtvmedia.requestumdemo.com/api/v1/parcels.json', {
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
