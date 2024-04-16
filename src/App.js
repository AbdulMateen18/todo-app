import TodoSearch from "./components/TodoSearch";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="todo-container">
      <TodoSearch />
      <TodoFilter />
      <TodoList />
    </div>
  );
}

export default App;
