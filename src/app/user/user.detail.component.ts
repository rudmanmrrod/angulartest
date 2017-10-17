import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './templates/user.detail.html',
  providers: [UserService]
})
export class UserDetailComponent implements OnInit{
	title = "Lista de usuarios";
	user = [];
	
	constructor(private userService: UserService,private route: ActivatedRoute) { 	}

	ngOnInit() {
		this.loadUser();
	}

	loadUser() {
		var id = this.route.snapshot.params['id'];
		this.userService.getOne(id).subscribe(user => this.user = user);
	}

	  
}