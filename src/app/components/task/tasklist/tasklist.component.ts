import { Component, OnInit } from '@angular/core';
import { Task, TaskPriority, TaskStatus } from '../../../models/task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
export class TasklistComponent implements OnInit{
  listaTareas:Task[] = [];
  
  ngOnInit(): void {
    let task1:Task = new Task (1,"Tarea 1", "Descripción Tarea 1",TaskPriority.Baja,TaskStatus.Pendiente,new Date("11/1/2024"),new Date("11/18/2024"),false);
    let task2:Task = new Task (2,"Tarea 2", "Descripción Tarea 2",TaskPriority.Alta,TaskStatus.EnProceso,new Date("11/5/2024"),new Date("11/16/2024"),false);
    let task3:Task = new Task (3,"Tarea 3", "Descripción Tarea 3",TaskPriority.Baja,TaskStatus.EnProceso,new Date("11/21/2024"),new Date("11/30/2024"),false);
    let task4:Task = new Task (4,"Tarea 4", "Descripción Tarea 4",TaskPriority.Alta,TaskStatus.Completada,new Date("11/8/2024"),new Date("11/21/2024"),false);
    let task5:Task = new Task (5,"Tarea 5", "Descripción Tarea 5",TaskPriority.Media,TaskStatus.Pendiente,new Date("11/10/2024"),new Date("11/30/2024"),false);
    this.listaTareas = [task1,task2,task3,task4,task5];
  }

}
