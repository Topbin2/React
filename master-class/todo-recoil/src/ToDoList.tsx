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
  const { register, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input {...register("Email", { required: true })} placeholder="Email" />
        <input
          {...register("First ame", { required: true })}
          placeholder="First Name"
        />
        <input
          {...register("LastName", { required: true })}
          placeholder="Last Name"
        />
        <input
          {...register("UserName", { required: true, minLength: 10 })}
          placeholder="User Name"
        />
        <input
          {...register("Password", { required: true, minLength: 5 })}
          placeholder="Password"
        />
        <input
          {...register("PasswordConfirm", {
            required: "Password is required",
            minLength: { value: 5, message: "Your password is too short" },
          })}
          placeholder="Password Confirm"
        />
        <button>add</button>
      </form>
    </div>
  );
};

export default ToDoList;
