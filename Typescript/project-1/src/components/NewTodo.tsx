import React, { useContext, useRef } from 'react';
import './NewTodo.css';
import { TodosContext } from '../store/todos-context';

const NewTodo: React.FC = () => {
	const textInputRef = useRef<HTMLInputElement>(null);
	const todoCtx = useContext(TodosContext);

	const todoSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		const enteredText = textInputRef.current!.value;
		todoCtx.addTodo(enteredText);
		textInputRef.current!.value = '';
		textInputRef.current!.focus();
	};

	return (
		<form className="form-control" onSubmit={todoSubmitHandler}>
			<div>
				<label htmlFor="todo-text">Todo Text</label>
				<input ref={textInputRef} type="text" id="todo-text" />
			</div>
			<button type="submit">ADD TODO</button>
		</form>
	);
};

export default NewTodo;
