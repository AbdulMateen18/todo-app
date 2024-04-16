// import { useState } from "react";
// import Search from "./components/Search";
// import TodoList from "./components/TodoList";
// import Filter from "./components/Filter";

// function App() {
//   const [todos, setTodos] = useState([
//     { id: 0, task: "Learn JavaScript", status: "Active" },
//     { id: 1, task: "Read a self-help book", status: "Active" },
//     { id: 2, task: "Play PS5", status: "Active" },
//     { id: 3, task: "Watch YouTube videos", status: "Active" },
//     // { id: 5, task: "Pray to God", status: "Active" },
//   ]);

//   // add todo function
//   const addTodo = (data) => {
//     setTodos([
//       ...todos,
//       (data = {
//         ...data,
//         id: parseInt(todos[todos.length - 1].id) + 1,
//         status: "Active",
//       }),
//     ]);
//     console.log(data);
//   };

//   // delete function
//   const delTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id != id));
//   };

//   // update function
//   const updateTodo = (e, id, text) => {
//     e.preventDefault();
//     // this line helps to get the current todo based on the ID called todoId in TodoList
//     const todo = todos[id];
//     const updatedUser = { ...todo, task: text, status: "Active" };
//     setTodos(todos.map((t) => (t.id == todo.id ? updatedUser : t)));
//   };

//   const completeTodo = (e, id) => {
//     if (e.target.checked) {
//       setTodos(
//         todos.map((todo) =>
//           todo.id == id ? { ...todo, status: "Completed" } : todo
//         )
//       );
//     } else {
//       setTodos(
//         todos.map((todo) =>
//           todo.id == id ? { ...todo, status: "Active" } : todo
//         )
//       );
//     }
//   };

//   const filterTodo = (cat_value) => {
//     // setTodos(todos.filter(todo => todo.status == cat_value))
//     setTodos(todos.filter((todo) => todo.status === cat_value));
//   };

//   return (
//     <div className="todo-container">
//       <Search addTodo={addTodo} />
//       <Filter filter_todo={filterTodo} />
//       <TodoList
//         todos={todos}
//         delTodo={delTodo}
//         update_todo={updateTodo}
//         complete_todo={completeTodo}
//       />
//     </div>
//   );
// }

// export default App;

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

  const [filteredTodos, setFilteredTodos] = useState(todos); // Add this line
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
    setFilteredTodos([...todos, newTodo]); // Add this line
  };

  const delTodo = (id) => {
    const remainingTodos = todos.filter((todo) => todo.id !== id);
    setTodos(remainingTodos);
    setFilteredTodos(remainingTodos); // Add this line
  };

  const updateTodo = (e, id, text) => {
    e.preventDefault();
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task: text, status: "Active" } : todo
    );
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos); // Add this line
  };

  const completeTodo = (e, id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, status: e.target.checked ? "Completed" : "Active" }
        : todo
    );
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos); // Add this line
  };

  const filterTodo = (cat_value) => {
    setFilter(cat_value); // Update this line
  };

  return (
    <div className="todo-container">
      <Search addTodo={addTodo} />
      <Filter filter_todo={filterTodo} />
      <TodoList
        todos={filteredTodos} // Change this line
        delTodo={delTodo}
        update_todo={updateTodo}
        complete_todo={completeTodo}
      />
    </div>
  );
}

export default App;
