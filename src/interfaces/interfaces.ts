export interface ITodoListItem {
  textItem: string;
  important?: boolean;
  id?: number;
}

export interface ITodos {
  todos: ITodoListItem[];
}
