
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    AddTaskComponent,
    UpdateTaskComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
   
   // NgbModule
    
    
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
