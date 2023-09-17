import { Component ,OnInit} from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../task';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit{
  
  constructor(private taskService:TaskService, private router:Router,private route:ActivatedRoute ){}
  // updateForm!:FormGroup
  // submitted=false;
  tasks:Task=new Task();
  id!:number;

  ngOnInit(): void 
  {
    // this.updateForm=this.formBuilder.group({
    //   Title:['',Validators.required]
    // })  

    this.id=this.route.snapshot.params['id'];
    console.log(this.id);
    
     this.taskService.getTaskById(this.id).subscribe(data=>{
      this.tasks=data;
      console.log(this.tasks);
      
     })
  }
  onSubmit(){
    this.taskService.updateTask(this.id,this.tasks).subscribe(data=>{
      this.tasks=data;
    });
  }

 
  updateTaskDetails(){
    // this.submitted=true
    // if(this.updateForm.invalid){
    //   return
    // }
    this.taskService.updateTask(this.id,this.tasks).subscribe(data=>{
      alert("updated successfully");
      this.router.navigate(['/task']);
    }
    )
  }
}