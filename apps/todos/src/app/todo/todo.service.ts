import { Injectable } from '@nestjs/common';
import { Todo } from '@my-org/data';


const todos: Todo[] = [
  { message: 'Take out trash', done: false },
  { message: 'Continue using Nx', done: false },
];

@Injectable()
export class TodoService {
  getTodos(): Todo[] {
    return todos;
  }
}
