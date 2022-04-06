export interface Todo {
	id: string;
	text: string;
	todoId?: string;
}

export interface TodoListProps {
	items: { id: string; text: string }[];
	onDeleteTodo: (todoId: string) => void;
}

export interface NewTodoProps {
	onAddTodo: (todoText: string) => void;
}
