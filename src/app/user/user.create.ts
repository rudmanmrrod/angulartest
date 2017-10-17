import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './templates/user.create.html',
  providers: [UserService,User]
})
export class UserCreate{
	title = "Crear usuario";
	response = '';

	constructor(public user: User,private userService: UserService ) { }

	sendUser() {
		this.userService.create(this.user).subscribe(response => this.response = response);
		//var id = this.route.snapshot.params['id'];
		//this.userService.getOne(id).subscribe(user => this.user = user);
	}

	  
}