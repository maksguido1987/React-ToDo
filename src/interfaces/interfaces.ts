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

export interface ITodos {
  todos: ITodoListItem[];
  onDeleted: (paran: number) => void;
}

export interface IMoreDone {
  toDo: number;
  done: number;
}
