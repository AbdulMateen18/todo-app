import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Task Added.");

const Search = ({ addTodo }) => {
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
          addTodo(data);
          reset();
          notify();
        })}
      >
        <input
          type="text"
          id="task"
          placeholder="Enter Todo"
          {...register("task", { required: true })}
        />

        <button>Add</button>
      </form>
      <Toaster />
      {errors.task?.type == "required" && <small>This field is required</small>}
    </div>
  );
};

export default Search;
