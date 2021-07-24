export interface ITodoListItem {
  textItem: string;
  important: boolean;
  done: boolean;
  id: number;
  onDeletedListItem?: () => void;
  onToggleImportant?: () => void;
  onToggleDone?: () => void;
}

export interface ITodoListState {
  done: boolean;
  important: boolean;
}

export interface ITodoAppState {
  todoData: ITodoListItem[];
  term: string;
  filter: string;
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

export interface IAddTodoItemState {
  text: string;
}

export interface ISearch {
  onSearchChange: (atr: string) => void;
}

export interface ISearchState {
  term: string;
}

export interface IItemStatusFilter {
  filter: string;
  onFilterChange: (atr: string) => void;
}
