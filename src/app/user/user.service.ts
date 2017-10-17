import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class UserService {

  constructor(private http: Http) {
  }

  
 all(){ 
      var url = "http://localhost/yii2-restex/rest/v1/users";
      var response = this.http.get(url).map(res => res.json());
      return response;
  }

  getOne(id): Observable<any[]> {
    var url = "http://localhost/yii2-restex/rest/v1/users/"+id;
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  create(params){
    var url = "http://localhost/yii2-restex/rest/v1/users";
    var response = this.http.post(url,params).map(res => res.json());
    return response;

  }


}