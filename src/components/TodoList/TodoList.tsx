import React, { FC } from 'react';
import { ITodos } from '../../interfaces/interfaces';
import TodoListItem from './TodoListItem';
import './todo-list.scss';

const TodoList: FC<ITodos> = ({ todos }) => {
  const element = todos.map((el) => {
    return (
      <li key={el.id} className="list-group-item">
        <TodoListItem textItem={el.textItem} important={el.important} />
      </li>
    );
  });
  return <ul className="list-group todo-list">{element}</ul>;
};

export default TodoList;
