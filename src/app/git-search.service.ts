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

  constructor(private http: HttpClient) {
    console.log('Github Service Ready...');
    this.username =  'Flora-Chepchirchir8';
  }
  getUser() {
    interface ApiResponse{
    }
    return this.http.get('https://api.github.com/users/' + this.username)
    .pipe(map(result => result));
   
  }
  getRepos() {
    return this.http.get(' https://api.github.com/users/' + this.username + '/repos')
    .pipe(map(result=> result));
}
updateUser(username: string) {
  this.username = username;
}
}