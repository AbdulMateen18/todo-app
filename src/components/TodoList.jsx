import React from "react";

const TodoList = () => {
  return (
    <div className="todo-list">
      <div className="todo-list-item">
        <div className="task">
          <input type="checkbox" />
          <p>todo item</p>
        </div>

        <div className="btn-container">
          <div className="edit"></div>
          <div className="del"></div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
