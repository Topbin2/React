import React, { useRef } from 'react';
import './NewTodo.css';
import { NewTodoProps } from '../todo.model';

const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
	const textInputRef = useRef<HTMLInputElement>(null);

	const todoSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		const enteredText = textInputRef.current!.value;
		onAddTodo(enteredText);
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
