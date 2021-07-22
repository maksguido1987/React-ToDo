export interface ITodoListItem {
  textItem: string;
  important?: boolean;
  done?: boolean;
  id: number;
  onDeletedListItem?: () => void;
  onToggleImportant?: () => void;
  onToggleDone?: () => void;
}

export interface ITodoAppState {
  todoData: ITodoListItem[];
}

export interface ITodos {
  todos: ITodoListItem[];
  onDeleted: (id: number) => void;
  onToggleImportant: (id: number) => void;
  onToggleDone: (id: number) => void;
}

export interface IMoreDone {
  toDo: number;
  done: number;
}

export interface IAddTodoItem {
  onItemAdded: (text: string) => void;
}
