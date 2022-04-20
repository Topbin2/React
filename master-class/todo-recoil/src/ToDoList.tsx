import React, { useState } from "react";
import { useForm } from "react-hook-form";

// const ToDoList = () => {
//   const [todo, setTodo] = useState('');
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const value = event.currentTarget.value;
//     setTodo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(todo);
//     setTodo('');
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input value={todo} onChange={onChange} type="text" placeholder="Write a to do" />
//         <button>add</button>
//       </form>
//     </div>
//   );
// };

const ToDoList = () => {
  const { register, watch } = useForm();
  console.log(watch());

  return (
    <div>
      <form>
        <input {...register("Email")} placeholder="Email" />
        <input {...register("First ame")} placeholder="First Name" />
        <input {...register("LastName")} placeholder="Last Name" />
        <input {...register("UserName")} placeholder="User Name" />
        <input {...register("Password")} placeholder="Password" />
        <input
          {...register("PasswordConfirm")}
          placeholder="Password Confirm"
        />
        <button>add</button>
      </form>
    </div>
  );
};

export default ToDoList;
