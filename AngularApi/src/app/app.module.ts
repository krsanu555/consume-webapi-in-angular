import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule}     from './app-routing/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './employee.service';
import { MessageService } from './message.service';
import { AddpostComponent } from './addpost/addpost.component';
import { PostdetailComponent } from './postdetail/postdetail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule,AppRoutingModule,ReactiveFormsModule],
  declarations: [ AppComponent, HelloComponent, EmployeeComponent, AddpostComponent, PostdetailComponent ],
  bootstrap:    [ AppComponent ],
  providers: [EmployeeService, MessageService]
})
export class AppModule { }
