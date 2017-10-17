import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './templates/user.component.html',
  providers: [UserService]
  //styleUrls: ['./app.component.css']
})
export class UserComponent implements OnInit {
	title = "Lista de usuarios";
	user: User;
	users = [];
	
	constructor(private userService: UserService,private router: Router,) { }

	getAll(): void {
	    this.userService.all().subscribe(users => this.users = users);
	}

	ngOnInit(): void {
	    this.getAll();
	}

	detail(id): void{
		this.router.navigate(['/users', id]);
	}
  
}