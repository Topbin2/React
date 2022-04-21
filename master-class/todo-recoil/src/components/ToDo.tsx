import { useRecoilValue } from "recoil";
import { toDoState } from "../atoms";

const ToDo = () => {
  const toDos = useRecoilValue(toDoState);

  return (
    <ul>
      {toDos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default ToDo;
