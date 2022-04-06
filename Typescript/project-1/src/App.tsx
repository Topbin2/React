import React from 'react';

//components
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import TodosContextProvider from './store/todos-context';

const App: React.FC = () => {
	return (
		<TodosContextProvider>
			<NewTodo />
			<TodoList />
		</TodosContextProvider>
	);
};

export default App;
