import {Component} from '@angular/core';

@Component({
	selector: 'login',
	templateUrl: 'login.template.html'
})
export class LogInComponent {
	constructor() {
	}

	userEmail: string = 'admin';
	userPassword: string = '123456';

	public submitLoginForm() {
		//TODO: Try to login user
		this.saveUserData(this.userEmail, this.userPassword);
		//TODO: If user login correct redirect on home page
		if (true) {
			this.redirectOnHomePage();
		}
	}

	private saveUserData(email, password) {
		//TODO: Password shod be encrypted
		window.sessionStorage.setItem('user-data', JSON.stringify({email, password}));
	}

	private redirectOnHomePage() {
		const HOME_PAGE = '/';
		location.href = HOME_PAGE;
	}
}
