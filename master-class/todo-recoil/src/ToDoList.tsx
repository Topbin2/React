import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue } from "recoil";

interface IForm {
  todo: string;
}

interface ITodo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

const toDoState = atom<ITodo[]>({
  key: "toDo",
  default: [],
});

const ToDoList = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);

  const { register, handleSubmit, setValue, setFocus } = useForm<IForm>();

  const handleValid = ({ todo }: IForm) => {
    setToDos((oldToDos) => [
      { text: todo, id: Date.now(), category: "TO_DO" },
      ...oldToDos,
    ]);
    setValue("todo", "");
    setFocus("todo");
  };
  console.log(toDos);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("todo", { required: "Please write a To Do" })}
          type="text"
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
