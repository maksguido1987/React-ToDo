import React, { FC } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import TodoList from './components/TodoList/TodoList';

const App: FC = () => {
  const todoData = [
    { textItem: 'Drink Coffee', important: false, id: 1 },
    { textItem: 'Build React App', important: true, id: 2 },
    { textItem: 'Have a lunch', important: false, id: 3 },
  ];
  return (
    <div>
      <Header />
      <Search />
      <TodoList todos={todoData} />
    </div>
  );
};

export default App;
