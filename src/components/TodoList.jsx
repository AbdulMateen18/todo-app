import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TodoList = ({ todos }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div className="todo-list-item" key={todo.id}>
          <div className="task">
            <input type="checkbox" />
            <p>{todo.task}</p>
          </div>

          <div className="btn-container">
            <div className="edit">
              <FaRegEdit size={25} />
            </div>
            <div className="del">
              <MdDelete size={25} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
