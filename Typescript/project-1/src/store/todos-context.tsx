import React, { useState } from 'react';

import { Todo, ContextType } from '../todo.model';

export const TodosContext = React.createContext<ContextType>({
	items: [],
	addTodo: () => {},
	removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = ({ children }) => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const todoAddHandler = (text: string) => {
		setTodos(prevTodos => [...prevTodos, { id: Math.random().toString(), text: text }]);
	};

	const todoDeleteHandler = (todoId: string) => {
		setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
	};

	const contextValue = {
		items: todos,
		addTodo: todoAddHandler,
		removeTodo: todoDeleteHandler,
	};

	return <TodosContext.Provider value={contextValue}>{children}</TodosContext.Provider>;
};

export default TodosContextProvider;
