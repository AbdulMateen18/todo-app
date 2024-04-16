import React from "react";
import { useForm } from "react-hook-form";

const TodoSearch = ({ add_Todo }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <div className="todo-search">
      <form
        action=""
        onSubmit={handleSubmit((data) => {
          add_Todo(data);
          reset();
        })}
      >
        <input
          type="text"
          placeholder="Enter todo"
          {...register("task", { required: true })}
        />
        <button>Add</button>
      </form>
      {errors.task?.type === "required" && (
        <small>This field is required</small>
      )}
    </div>
  );
};

export default TodoSearch;
