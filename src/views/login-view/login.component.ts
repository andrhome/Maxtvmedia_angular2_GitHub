import {Component} from '@angular/core';
import {HttpService} from "../../services/http-services.service";

@Component({
    selector: 'login',
    templateUrl: 'login.template.html',
    providers: [HttpService]
})
export class LogInComponent {
    constructor(private http: HttpService) {
    }

    public userEmail: string = 'admin';
    public userPassword: string = '123456';

    public submitLoginForm() {
        this.http.getToken(this.userEmail, this.userPassword).subscribe(
            data => {
                if (data.access_token) {
                    let token = data.access_token;

                    window.sessionStorage.setItem('token', token);

                    this.http.setToken(token);

                    this.redirectOnHomePage();
                } else {
                    //TODO: Throw an error
                }
            }
        );
    }

    private redirectOnHomePage() {
        const HOME_PAGE = '/';
        location.href = HOME_PAGE;
    }

}
