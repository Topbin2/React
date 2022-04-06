import React from 'react';
import './TodoList.css';
import { TodoListProps } from '../todo.model';

const TodoList: React.FC<TodoListProps> = ({ items, onDeleteTodo }) => {
	return (
		<ul>
			{items.map(todo => (
				<li key={todo.id}>
					{todo.text}
					<button id={todo.id} onClick={() => onDeleteTodo(todo.id)}>
						DELETE
					</button>
				</li>
			))}
		</ul>
	);
};

export default TodoList;
