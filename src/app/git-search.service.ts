import { Injectable } from '@angular/core';
import{map} from "rxjs/operators"
import { User } from './user';
import { HttpClient } from "@angular/common/http";
import { environment } from "./../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class GitSearchService {
  username: string;
  // userProfile: User;
  // result:any
  constructor(private http: HttpClient) {
    console.log('Github Service Ready...');
    this.username =  'brigid-chepkemoi';
  }
  getUser() {
    interface ApiResponse{
    }
    // let promise = new Promise<void>((resolve, reject)=>{
    return this.http.get('https://api.github.com/users/' + this.username)
    .pipe(map(result => result));
    // })
  }
  getRepos() {
    return this.http.get(' https://api.github.com/users/' + this.username + '/repos')
    .pipe(map(result=> result));
}
updateUser(username: string) {
  this.username = username;
}
}