import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";

interface IForm {
  todo: string;
}

const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);


  const { register, handleSubmit, setValue, setFocus } = useForm<IForm>();

  const handleValid = ({ todo }: IForm) => {
    setToDos((oldToDos) => [
      { text: todo, id: Date.now(), category },
      ...oldToDos,
    ]);
    setValue("todo", "");
    setFocus("todo");
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

export default CreateToDo;
