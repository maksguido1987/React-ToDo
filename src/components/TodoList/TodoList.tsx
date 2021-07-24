import React, { FC } from 'react';
import { ITodos } from '../../interfaces/interfaces';
import TodoListItem from './TodoListItem';
import './todo-list.scss';

const TodoList: FC<ITodos> = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  const element = todos.map((el) => {
    return (
      <li key={el.id} className="list-group-item">
        <TodoListItem
          id={el.id}
          textItem={el.textItem}
          important={el.important}
          done={el.done}
          onDeletedListItem={() => onDeleted(el.id)}
          onToggleImportant={() => onToggleImportant(el.id)}
          onToggleDone={() => onToggleDone(el.id)}
        />
      </li>
    );
  });
  return <ul className="list-group todo-list">{element}</ul>;
};

export default TodoList;
