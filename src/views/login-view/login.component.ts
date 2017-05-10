import {Component} from '@angular/core';

@Component({
	selector: 'login',
	templateUrl: 'login.template.html'
})
export class LogInComponent {
	constructor() {
	}

	userEmail: string = 'test@test.com';
	userPassword: string = '12345';

	public submitLoginForm(e) {
		e.preventDefault();
		this.saveUserData(this.userEmail, this.userPassword);
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
