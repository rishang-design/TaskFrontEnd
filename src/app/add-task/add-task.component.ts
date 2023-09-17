import { Component,OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit{

  //validations
  // registerForm!:FormGroup
  // submitted=false;
  tasks:Task=new Task();
  constructor(private taskService:TaskService, private router:Router,private formBuilder:FormBuilder){}

  ngOnInit(): void {

    // //validations
    // this.registerForm=this.formBuilder.group({
    //   Title:['',Validators.required]
    //})  
  }
  addTaskDetails(){
    console.log(this.tasks);
    // this.submitted=true
    // if(this.registerForm.invalid){
    //   return
    // }alert("Success")
    
    this.taskService.addTask(this.tasks).subscribe(data=>{
      alert("Task is added successfully");
      this.gotoListPage();
    })
  }

  gotoListPage(){
    this.router.navigate(['/task']);
  }
  

  onSubmit(){
    //console.log(this.tasks);
    
   
  }
  
}
