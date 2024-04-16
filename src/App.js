import { useState } from "react";
import TodoSearch from "./components/TodoSearch";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 0, task: "Learn JavaScript", status: "Active" },
    { id: 1, task: "Read a self-help book", status: "Active" },
    { id: 2, task: "Play PS5", status: "Active" },
    { id: 3, task: "Watch YouTube videos", status: "Active" },
    // { id: 5, task: "Pray to God", status: "Active" },
  ]);

  const todoDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (data) => {
    setTodos([
      ...todos,
      (data = {
        ...data,
        id: Number(todos[todos.length - 1].id) + 1,
        status: "Active",
      }),
    ]);
  };

  return (
    <div className="todo-container">
      <TodoSearch add_Todo={addTodo} />
      <TodoFilter />
      <TodoList todos={todos} delete_todo={todoDelete} />
    </div>
  );
}

export default App;
