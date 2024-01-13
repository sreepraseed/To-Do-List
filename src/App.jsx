// src/App.js
import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
function App() {
  return (
    <div>
      <h1>ToDo App</h1>
      <TodoForm />
      <h2>All Todos</h2>
      <TodoList />
    </div>
  );
}

export default App;

