import { useForm } from "react-hook-form";

interface IForm {
  Email: string;
  FirstName: string;
  LastName: string;
  UserName: string;
  Password: string;
  PasswordConfirm: string;
  extraError?: string;
}

const ToDoList = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>();
  const onValid = (data: IForm) => {
    if (data.Password !== data.PasswordConfirm) {
      setError(
        "PasswordConfirm",
        { message: "Passwowrd are not the same" },
        { shouldFocus: true }
      );
    }
    // setError("extraError", { message: "Server offline" });
  };
  console.log(errors);

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("Email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
            validate: {
              noNico: (value) =>
                value.includes("nico") ? "no nicos allowed" : true,
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.Email?.message}</span>
        <input
          {...register("FirstName", {
            required: "First name is required",
            validate: (value) =>
              value.includes("nico") ? "no nicos allowed" : true,
          })}
          placeholder="First Name"
        />
        <span>{errors?.FirstName?.message}</span>
        <input
          {...register("LastName", { required: "Last name is required" })}
          placeholder="Last Name"
        />
        <span>{errors?.LastName?.message}</span>
        <input
          {...register("UserName", {
            required: "User name is required",
            minLength: 5,
          })}
          placeholder="User Name"
        />
        <span>{errors?.UserName?.message}</span>
        <input
          {...register("Password", {
            required: "Password is required",
            minLength: 5,
          })}
          placeholder="Password"
        />
        <span>{errors?.Password?.message}</span>
        <input
          {...register("PasswordConfirm", {
            required: "Password is required",
            minLength: { value: 5, message: "Your password is too short" },
          })}
          placeholder="Password Confirm"
        />
        <span>{errors?.PasswordConfirm?.message}</span>
        <button>add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
};

export default ToDoList;
