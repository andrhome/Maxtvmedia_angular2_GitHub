import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GetHttpService {

    constructor(private http: Http) {}

    getData(path: string) {
        return this.http.get(path);
    }
}
