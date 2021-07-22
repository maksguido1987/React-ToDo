import React, { FC } from 'react';
import { ITodos } from '../../interfaces/interfaces';
import TodoListItem from './TodoListItem';
import './todo-list.scss';

const TodoList: FC<ITodos> = ({ todos, onDeleted }) => {
  const element = todos.map((el) => {
    return (
      <li key={el.id} className="list-group-item">
        <TodoListItem
          id={el.id}
          textItem={el.textItem}
          important={el.important}
          onDeletedListItem={() => onDeleted(el.id)}
        />
      </li>
    );
  });
  return <ul className="list-group todo-list">{element}</ul>;
};

export default TodoList;
