import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";

interface IForm {
  todo: string;
}

const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoState);

  const { register, handleSubmit, setValue, setFocus } = useForm<IForm>();

  const handleValid = ({ todo }: IForm) => {
    setToDos((oldToDos) => [
      { text: todo, id: Date.now(), category: "TO_DO" },
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
