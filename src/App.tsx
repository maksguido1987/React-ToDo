import React, { Component } from 'react';
import AddTodoItem from './components/AddTodoItem/AddTodoItem';
import Header from './components/Header/Header';
import ItemStatusFilter from './components/ItemStatusFilter/ItemStatusFilter';
import Search from './components/Search/Search';
import TodoList from './components/TodoList/TodoList';
import { ITodoAppState } from './interfaces/interfaces';

export default class App extends Component<{}, ITodoAppState> {
  maxId = 100;

  constructor(props: ITodoAppState) {
    super(props);
    this.state = {
      todoData: [
        { textItem: 'Drink Coffee', important: false, id: 1 },
        { textItem: 'Build React App', important: true, id: 2 },
        { textItem: 'Have a lunch', important: false, id: 3 },
      ],
    };
  }

  deleteListItem = (id: number) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newData = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newData,
      };
    });
  };

  addItem = (text: any) => {
    const newListItem = {
      textItem: text,
      important: false,
      id: (this.maxId += 1),
    };

    this.setState(({ todoData }) => {
      const newArray = [...todoData, newListItem];
      return {
        todoData: newArray,
      };
    });
  };

  render() {
    const { todoData } = this.state;
    return (
      <div className="todo-app">
        <Header toDo={1} done={3} />
        <div className="top-panel d-flex">
          <Search />
          <ItemStatusFilter />
        </div>
        <TodoList todos={todoData} onDeleted={this.deleteListItem} />
        <AddTodoItem onItemAdded={this.addItem} />
      </div>
    );
  }
}
