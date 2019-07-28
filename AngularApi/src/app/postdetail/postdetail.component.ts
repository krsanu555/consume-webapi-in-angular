import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {EmployeeService} from '../employee.service';
import { PostDetail } from '../postdetail';
@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css']
})
export class PostdetailComponent implements OnInit {
postdetail:PostDetail;
  constructor(private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location) { }

  ngOnInit():void {
    this.getPost();
  }
  getPost(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.employeeService.getPost(id)
      .subscribe(postdetail => this.postdetail = postdetail);
  }
 
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.employeeService.updatePost(this.postdetail)
      .subscribe(() => this.goBack());
  }
}