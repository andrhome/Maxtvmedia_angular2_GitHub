import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { PostService } from "./post-service";

@Component({
    selector: 'postServicesView',
    templateUrl: 'post-services.template.html',
})
export class PostServicesComponent implements OnInit {

    services: PostService[] = [];

    constructor() {}

    ngOnInit() {
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
