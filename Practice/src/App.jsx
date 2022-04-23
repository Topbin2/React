import { useForm } from 'react-hook-form';


function App() {
  const { register, handleSubmit } = useForm();

  console.log(register());

  return (
    <input type="text" />
  );
}

export default App;
