import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {GlobalVariables} from "../app/global-variables";

let headers: Headers = new Headers();
let options = new RequestOptions({headers: headers});

@Injectable()
export class HttpService {

    constructor(private http: Http) {
    }

    getData(url: string) {
        if (!headers.get('Authorization')) {
            this.setToken(window.sessionStorage.getItem('token'));
        }

        return this.http.get(url, options)
            .map((resp: Response) => resp.json())
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    getSuitesByBuildId(id: number) {
        return this.http.get(`${GlobalVariables.BASE_URL}/v1/suites/building/${id}`, options)
            .map((resp: Response) => resp.json())
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    getResidentsBySuiteId(id: number) {
        return this.http.get(`${GlobalVariables.BASE_URL}/v1/suites/residents/${id}`, options)
            .map((resp: Response) => resp.json())
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    addItem(data) {
        if (!headers.get('Authorization')) {
            this.setToken(window.sessionStorage.getItem('token'));
        }

        return this.http.post(`${GlobalVariables.BASE_URL}/v1/parcels`, data, options);
    }

    setToken(token) {
        token = `Bearer ${token}`;
        headers.append('Authorization', token);
    }

    getToken(email, password) {
        return this.http.post(`${GlobalVariables.BASE_URL}/security/login`, {email, password})
            .map((res: Response) => res.json());
    }

    editItem(id, data) {
        if (!headers.get('Authorization')) {
            this.setToken(window.sessionStorage.getItem('token'));
        }

        return this.http.patch(`${GlobalVariables.BASE_URL}/v1/parcels/${id}`, data, options);
    }
}
