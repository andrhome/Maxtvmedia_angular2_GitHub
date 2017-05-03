import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { ParselsList } from './parsels-list';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ParselsListHttpService {

    constructor(private http: Http) { }

    getData() : Observable<ParselsList[]>{
        return this.http.get('parsels-list.json')
            .map((resp: Response) => resp.json())
            .catch((error: any) => { return Observable.throw(error) });
    }
}
