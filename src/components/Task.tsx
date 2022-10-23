import React from 'react';
import './styles.css';

import { TodoModel } from '../models/todoModel';

interface props {
    index: number;
    todo: string;
    todolist: Array<TodoModel>;
    setTodolist: React.Dispatch<React.SetStateAction<Array<TodoModel>>>;
}

const Task: React.FC<props> = ({ todo }) => {
  return (
    <section>
        <span className='taskcard'>{todo}</span>
    </section>
  )
}

export default Task;