import React, {useState} from 'react';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';


function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  
  const todoAddHandler = (text: string) => {
    const newTodo = {id: Math.random().toString(), text}
    setTodos(prevTodos => [...prevTodos, newTodo])
  }

  const deleteHandler = (id: string) => {
    setTodos(prevTodos => prevTodos.filter(t => t.id !== id))
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList todos={todos} onDelete={deleteHandler} />
    </div>
  );
}

export default App;
