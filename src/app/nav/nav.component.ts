import { Component, OnInit } from '@angular/core';

import { GitSearchService } from '../git-search.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  
})
export class NavComponent implements OnInit {
  username!: string;
  user: any= [];
  repositories: any= [];
  constructor(private Service: GitSearchService) {
    this.Service.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
    });
    this.Service.getRepos().subscribe(repositories => {
      this.repositories = repositories;
    });
  }
  ngOnInit() {}
  //calling the final information regarding user
   searchUser() {
     this.Service.updateUser(this.username);
     this.Service.getUser().subscribe(user => {
       this.user = user;
     });
     this.Service.getRepos().subscribe(repositories => {
       this.repositories = repositories;
     });
   }
}