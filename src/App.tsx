import React, { useState } from 'react';

import InputField from './components/InputField';
import Todolist from './components/Todolist';
import { TodoModel } from './models/todoModel';

export const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todolist, setTodolist] = useState<TodoModel[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodolist([...todolist, {id: Date.now(), todo }]);
      setTodo('');
    }
  }

  return (
    <main>
      <h1>Tasks</h1>
      <InputField
      todo={todo}
      setTodo={setTodo}
      handleAdd={handleAdd} />
      <Todolist
      todolist={todolist}
      setTodolist={setTodolist}
       />
    </main>
  )
}

export default App;