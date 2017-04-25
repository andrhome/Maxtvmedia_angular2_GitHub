import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { GetHttpService } from "../services/get-http.service";
import { PostService } from "./post-service";

@Component({
    selector: 'postServicesView',
    templateUrl: 'post-services.template.html',
    providers: [GetHttpService]
})
export class PostServicesComponent implements OnInit {

    services: PostService[] = [];

    constructor(private httpService: GetHttpService) {}

    ngOnInit() {
        this.httpService.getData('parsel-type.json').subscribe((data: Response) => this.services = data.json());
    }

    // Create a Post Service
    createConditions: boolean = false;

    createPostService() {
        this.createConditions = true;
    }

    postServiceName: string;

    savePostService(serviceName: Object) {

        this.services.push(new PostService(serviceName));
        console.log(this.services);

        this.postServiceName = '';

        this.createConditions = false;
    }
}
