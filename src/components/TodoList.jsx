import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TodoList = () => {
  return (
    <div className="todo-list">
      <div className="todo-list-item">
        <div className="task">
          <input type="checkbox" />
          <p>todo item</p>
        </div>

        <div className="btn-container">
          <div className="edit">
            <FaRegEdit />
          </div>
          <div className="del">
            <MdDelete />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
