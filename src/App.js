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

  return (
    <div className="todo-container">
      <TodoSearch />
      <TodoFilter />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
