import React from 'react';

interface props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC <props> = ({ todo, setTodo, handleAdd }) => {

  return (
    <form
    onSubmit={(e) => {
      handleAdd(e);
    }}>
        <input
        type='text'
        placeholder='Enter a Task...'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        />
        <button type='submit'>Add Task</button>
    </form>
  )
}

export default InputField;