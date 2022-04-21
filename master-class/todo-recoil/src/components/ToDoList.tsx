import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const ToDoList = () => {
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <ToDo />
    </div>
  );
};

export default ToDoList;
