import React, { FC } from 'react';
import { ITodoListItem } from '../../interfaces/interfaces';

const TodoListItem: FC<ITodoListItem> = ({ textItem, important = false }) => {
  const listStyle: { color: string; fontWeight: string } = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal',
  };
  return (
    <span className="todo-list-item" style={listStyle}>
      <span className="todo-list-item-label" style={listStyle}>
        {textItem}
      </span>
      <button type="button" className="btn btn-outline-success btn-sm float-right">
        <i className="bi bi-archive-fill" />
      </button>

      <button type="button" className="btn btn-outline-danger btn-sm float-right">
        <i className="bi bi-plus-square-fill" />
      </button>
    </span>
  );
};

export default TodoListItem;
