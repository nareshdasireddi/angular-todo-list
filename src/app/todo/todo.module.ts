import { TodoRoutingModule } from './todo-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoViewComponent } from './todo-view.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoViewComponent, AddTodoComponent, ListTodoComponent],
  imports: [CommonModule, FormsModule, TodoRoutingModule],
})
export class TodoModule {}
