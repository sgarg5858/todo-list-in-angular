import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, distinctUntilChanged, filter, map, tap } from 'rxjs';

export type PriorityOptions='average'|'high'|'critical';
export type StatusOptions='todo'|'inprogress'|'completed';

export interface ITask{
  title:string;
  description:string;
  priority:PriorityOptions;
  status:StatusOptions;
  assignedTo?:string;
}

export interface TaskState
{
  loading:boolean|null;
  tasks:ITask[]|null;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private router:Router) { }

  tasks:ITask[]=[
    {
      title:'Redesign Logo',
      description:'We have to redesign the logo',
      priority:'high',
      status:'todo'
    },
    {
      title:' TODO Feature',
      description:'Implement TODO feature',
      priority:'critical',
      status:'inprogress'
    },
    {
      title:'Create Popup Modal',
      description:'Pop up modal needed.',
      priority:'high',
      status:'todo'
    },
    {
      title:'Basic Overview Layout',
      description:'Create Overview layout for listing todo tasks.',
      priority:'high',
      status:'completed'
    }
  ];

  private taskSubject = new BehaviorSubject<TaskState>({loading:null,tasks:null});

  public readonly loading$ = this.taskSubject.asObservable().pipe(
    map((taskState:TaskState)=>taskState.loading),
    distinctUntilChanged(),
  )
  public readonly tasks$ = this.taskSubject.asObservable().pipe(
    map((taskState:TaskState)=>taskState.tasks),
    tap((tasks)=>console.log(tasks)),
  )
  public readonly todoTasks$ = this.tasks$.pipe(
    map((tasks)=> tasks?.filter((task)=>task.status === 'todo'),
    )
  );
  public readonly inProgressTasks$ = this.tasks$.pipe(
    map((tasks)=> tasks?.filter((task)=>task.status === 'inprogress')
    )
  )
  public readonly completedTasks$ = this.tasks$.pipe(
    map((tasks)=> tasks?.filter((task)=>task.status === 'completed')
    )
  )
  getTasks()
  {
    if(this.taskSubject.value.tasks === null)
    {
      this.taskSubject.next({loading:true,tasks:null});
    setTimeout(()=>{
      this.taskSubject.next({loading:false,tasks:this.tasks})
    },1000)
    }
  }

  addNewTask(task:ITask)
  {
    let currentTasks=this.taskSubject.value.tasks??[];
    let allTasks=[...currentTasks,task];
    this.taskSubject.next({
      loading:false,tasks:allTasks
    })

    this.router.navigate(["overview"]);
  }
}
