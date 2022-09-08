import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ITask, PriorityOptions, StatusOptions, TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  constructor(private router:Router,private taskService:TaskService) { }

  priorityList=['average','high','critical']
  addTaskForm= new FormGroup({
    title:new FormControl('',[Validators.required,Validators.minLength(4)]),
    description: new FormControl('',[Validators.required,Validators.minLength(5)]),
    priority: new FormControl('',[Validators.required]),
    status:new FormControl('todo',[Validators.required])
  })

  ngOnInit(): void {
  }

  saveItem()
  {
    if(this.addTaskForm.valid)
    {
      const task:ITask={
        title:this.addTaskForm.value.title!,
        description:this.addTaskForm.value.description!,
        priority:<PriorityOptions>this.addTaskForm.value.priority!,
        status:<StatusOptions>this.addTaskForm.value.status!,
      }
      this.taskService.addNewTask(task);
    }
  }

  goToOverView()
  {
    this.router.navigate([""]);
  }

}
