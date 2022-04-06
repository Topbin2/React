import React, { useState } from 'react';

//components
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

//types
import { Todo } from './todo.model';

const App: React.FC = () => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const TodoAddHandler = (text: string) => {
		setTodos(prevTodos => [...prevTodos, { id: Math.random().toString(), text: text }]);
	};

	const todoDeleteHandler = (todoId: string) => {
		console.log(todoId);
		setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
	};

	return (
		<>
			<NewTodo onAddTodo={TodoAddHandler} />
			<TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
		</>
	);
};

export default App;
