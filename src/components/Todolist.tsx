import React from 'react';

import Task from './Task';
import { TodoModel } from '../models/todoModel';

interface props {
  todolist: Array<TodoModel>;
  setTodolist: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}

const Todolist: React.FC<props> = ({
  todolist,
  setTodolist
}) => {
  return (
    <section>
      {todolist?.map((todo, index) => (
        <Task
        index={index}
        key={todo.id}
        todo={todo.todo}
        />
      ))}
    </section>
  )
}

export default Todolist;