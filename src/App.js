import { useState, useEffect } from "react";
import Search from "./components/Search";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";

function App() {
  const [todos, setTodos] = useState([
    { id: 0, task: "Learn JavaScript", status: "Active" },
    { id: 1, task: "Read a self-help book", status: "Active" },
    { id: 2, task: "Play PS5", status: "Active" },
    { id: 3, task: "Watch YouTube videos", status: "Active" },
  ]);

  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    setFilteredTodos(todos);
  }, []);

  useEffect(() => {
    if (filter === "All") {
      setFilteredTodos(todos);
    } else {
      setFilteredTodos(todos.filter((todo) => todo.status === filter));
    }
  }, [todos, filter]);

  const addTodo = (data) => {
    const newTodo = {
      ...data,
      id: parseInt(todos[todos.length - 1].id) + 1,
      status: "Active",
    };
    setTodos([...todos, newTodo]);
    setFilteredTodos([...todos, newTodo]);
  };

  const delTodo = (id) => {
    const remainingTodos = todos.filter((todo) => todo.id !== id);
    setTodos(remainingTodos);
    setFilteredTodos(remainingTodos);
  };

  const updateTodo = (e, id, text) => {
    e.preventDefault();
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task: text, status: "Active" } : todo
    );
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  };

  const completeTodo = (e, id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, status: e.target.checked ? "Completed" : "Active" }
        : todo
    );
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  };

  const filterTodo = (cat_value) => {
    setFilter(cat_value);
  };

  return (
    <div className="todo-container">
      <Search addTodo={addTodo} />
      <Filter filter_todo={filterTodo} />
      <TodoList
        todos={filteredTodos}
        delTodo={delTodo}
        update_todo={updateTodo}
        complete_todo={completeTodo}
      />
    </div>
  );
}

export default App;
