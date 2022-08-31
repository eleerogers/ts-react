import React from 'react'

import './TodoList.css'

interface TodoListProps {
  todos: {id: string, text: string}[],
  onDelete: (id: string) => void
}

const TodoList: React.FC<TodoListProps> = ({todos, onDelete}) => {
  
  return <ul>
    {todos.map(todo => <li key={todo.id}>
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>DELETE</button>
    </li>)}
  </ul>
}

export default TodoList;
