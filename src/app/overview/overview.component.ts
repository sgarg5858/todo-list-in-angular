import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(public taskService:TaskService,private router:Router) { }

  ngOnInit(): void {
    this.taskService.getTasks();
  }
  navigateToAddTask()
  {
    this.router.navigate(['add'])
  }

}
