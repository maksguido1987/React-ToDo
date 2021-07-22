export interface ITodoListItem {
  textItem: string;
  important?: boolean;
  id: number;
  onDeletedListItem?: () => void;
}

export interface ITodoListState {
  done: boolean;
  important: boolean;
}

export interface ITodoAppState {
  todoData: ITodoListItem[];
}

export interface ITodos {
  todos: ITodoListItem[];
  onDeleted: (id: number) => void;
}

export interface IMoreDone {
  toDo: number;
  done: number;
}

export interface IAddTodoItem {
  onItemAdded: (text: string) => void;
}
