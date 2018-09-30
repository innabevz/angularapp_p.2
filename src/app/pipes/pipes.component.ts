import { Pipe, PipeTransform } from '@angular/core';
import { FilterValue } from '../components/todos/todos.component';
import {ITodo} from '../models/todos.interface';

@Pipe ({
  name: todosFilter,
})

export class TodosPipe implements PipeTransform {
  transform (todos: [], filter: FilterValue): ITodo[] {
    switch (filter) {
      case FilterValue.Done:
        return todos.filter(todo => todo.completed === true);
      case FilterValue.Todo:
        return todos.filter(todo => todo.completed === false);
    }
  }
}
