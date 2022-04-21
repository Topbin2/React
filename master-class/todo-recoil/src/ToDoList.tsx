import { useForm } from "react-hook-form";

interface ITodo {
  todo: string;
}

const ToDoList = () => {
  const {
    register,
    handleSubmit,
    setValue
  } = useForm<ITodo>();

  const handleValid = (data: ITodo) => {
    console.log(data.todo);
    setValue('todo', "");
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("todo", { required: "Please write a To Do" })}
        type="text"
        placeholder="Write a to do"
      />
      <button>Add</button>
    </form>
  );
};

export default ToDoList;
