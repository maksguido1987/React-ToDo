import React from 'react';

export interface ITodoListItemText {
  textItem: string;
  important?: boolean;
}

const TodoListItem = ({ textItem, important = false }: ITodoListItemText) => {
  const listStyle = {
    color: important ? 'tomato' : 'black',
  };
  return <span style={listStyle}>{textItem}</span>;
};

export default TodoListItem;
