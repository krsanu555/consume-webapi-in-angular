import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {EmployeeService} from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
checkoutForm;
  constructor(private formBuilder: FormBuilder,private employeeService:EmployeeService ,private location:Location) {
    this.checkoutForm = this.formBuilder.group({
      id: '',
         userId:'',
         title: '',
      body:''
    }); }

onSubmit(postData) {
    // Process checkout data here

this.employeeService.addPost(postData).subscribe();
     
    this.checkoutForm.reset();
  }
  ngOnInit() {
  }
goBack(): void {
    this.location.back();
  }
}