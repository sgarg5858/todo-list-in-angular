import { Component, Input, OnInit } from '@angular/core';
import { ITask } from '../task.service';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  @Input() task!:ITask;
  constructor() { }

  ngOnInit(): void {
  }

}
