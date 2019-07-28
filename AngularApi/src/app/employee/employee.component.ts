import { Component, OnInit } from '@angular/core';
import { PostDetail } from '../postdetail';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
posts:PostDetail[];
  constructor( private employeeService:EmployeeService) { }

  ngOnInit() {
    this.getPosts();
    
  }
  getPosts(): void {
    this.employeeService.getPosts()
    .subscribe(posts => this.posts = posts);
  }
  delete(hero: PostDetail): void {
    this.posts = this.posts.filter(h => h !== hero);
    this.employeeService.deletePost(hero).subscribe();
  }

}

