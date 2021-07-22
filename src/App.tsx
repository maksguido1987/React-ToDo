import React, { FC } from 'react';
import Header from './components/Header/Header';
import ItemStatusFilter from './components/ItemStatusFilter/ItemStatusFilter';
import Search from './components/Search/Search';
import TodoList from './components/TodoList/TodoList';

const App: FC = () => {
  const todoData = [
    { textItem: 'Drink Coffee', important: false, id: 1 },
    { textItem: 'Build React App', important: true, id: 2 },
    { textItem: 'Have a lunch', important: false, id: 3 },
  ];
  return (
    <div className="todo-app">
      <Header toDo={1} done={3} />
      <div className="top-panel d-flex">
        <Search />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} onDeleted={(id) => console.log(id)} />
    </div>
  );
};

export default App;
