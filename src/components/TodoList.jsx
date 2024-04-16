import React, { useState, useRef } from "react";
import { AiFillDelete } from "react-icons/ai";
import { TbEdit } from "react-icons/tb";

const TodoList = ({ todos, delTodo, update_todo, complete_todo }) => {
  const taskRef = useRef(null);
  const [todoId, setTodoId] = useState(0);
  const [task, setTask] = useState("");
  const [toggle, setToggle] = useState(false);

  // this line helps to get the current value of the update field as the user types in.
  const [todo, setTodo] = useState("");

  const todoItem = (task, id) => {
    setTodoId(id);
    setTask(task);
    setToggle(true);
  };

  return (
    <>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <div className="todo-list-item" key={index}>
            <div className="task">
              <input
                type="checkbox"
                onChange={(e) => complete_todo(e, todo.id)}
              />
              <p
                id="t_task"
                className={todo.status == "Completed" ? "strike" : ""}
              >
                {todo.task}
              </p>
            </div>
            <div className="btn-container">
              <div className="edit">
                {" "}
                <TbEdit
                  size={25}
                  onClick={(e) => todoItem(todo.task, todo.id)}
                />{" "}
              </div>
              <div className="del">
                <AiFillDelete size={25} onClick={() => delTodo(todo.id)} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* modal section */}

      {toggle && (
        <div className="modal-container">
          <div className="modal">
            <h1>Update Form</h1>

            <form
              action=""
              onSubmit={(e) => {
                update_todo(e, todoId, task);
                setToggle(false);
              }}
            >
              <input
                type="text"
                ref={taskRef}
                placeholder="Update Todo"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                required
              />
              <button id="add">Add</button>
            </form>

            <div className="btn-container">
              <button
                className="cancel mod-btn"
                onClick={() => setToggle(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoList;
