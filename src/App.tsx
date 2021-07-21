import React, { FC } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import TodoList from './components/TodoList/TodoList';
import { ITodoListItemText } from './components/TodoList/TodoListItem';

export interface ITodos {
  todos: ITodoListItemText[];
}

const App: FC = () => {
  const TodoData: ITodos = [
    { textItem: 'Drink Coffee', important: false },
    { textItem: 'Build React App', important: true },
    { textItem: 'Have a lunch', important: false },
  ];
  return (
    <div>
      <Header />
      <Search />
      <TodoList todos={TodoData} />
    </div>
  );
};

export default App;
