import React, { FC } from 'react';
import TodoListItem, { ITodoListItemText } from './TodoListItem';

const TodoList: FC = ({ todos }: ITodoListItemText[]) => {
  // const element = todos
  return (
    <ul>
      <li>
        <TodoListItem textItem="Drink Coffee" />
      </li>
      <li>
        <TodoListItem textItem="Build React App" important />
      </li>
    </ul>
  );
};

export default TodoList;
