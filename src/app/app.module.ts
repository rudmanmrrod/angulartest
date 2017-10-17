import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user.detail.component';
import { UserCreate } from './user/user.create';

export const ROUTES: Routes = [
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'users', 
	  children:[
	  	{ path: '', component: UserComponent },
	  	{ path: 'create', component: UserCreate },
	  	{ path: ':id', component: UserDetailComponent },
	  ]
  },
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    UserCreate,
    UserDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
