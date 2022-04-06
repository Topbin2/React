import React, { useContext } from 'react';
import './TodoList.css';
import { TodosContext } from '../store/todos-context';

const TodoList: React.FC = () => {
	const todosCtx = useContext(TodosContext);

	return (
		<ul>
			{todosCtx.items.map(todo => (
				<li key={todo.id}>
					{todo.text}
					<button id={todo.id} onClick={() => todosCtx.removeTodo(todo.id)}>
						DELETE
					</button>
				</li>
			))}
		</ul>
	);
};

export default TodoList;
