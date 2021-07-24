/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import AddTodoItem from './components/AddTodoItem/AddTodoItem';
import Header from './components/Header/Header';
import ItemStatusFilter from './components/ItemStatusFilter/ItemStatusFilter';
import Search from './components/Search/Search';
import TodoList from './components/TodoList/TodoList';
import { ITodoAppState, ITodoListItem } from './interfaces/interfaces';
import './styles.scss';

export default class App extends Component<{}, ITodoAppState> {
  maxId = 100;

  constructor(props: ITodoAppState) {
    super(props);
    this.state = {
      todoData: [
        this.createTodoItem('Drink Coffee'),
        this.createTodoItem('Build React App'),
        this.createTodoItem('Have a lunch'),
      ],
      term: '',
      filter: '',
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

  addItem = (text: string) => {
    const newListItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArray = [...todoData, newListItem];
      return {
        todoData: newArray,
      };
    });
  };

  onToggleImportant = (id: number) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.togglePropertyes(todoData, id, 'important'),
      };
    });
  };

  onToggleDone = (id: number) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.togglePropertyes(todoData, id, 'done'),
      };
    });
  };

  onSearchChange = (term: string) => {
    this.setState({ term });
  };

  onFilterChange = (filter: string) => {
    this.setState({ filter });
  };

  togglePropertyes(arr: ITodoListItem[], id: number, attr: 'done' | 'important') {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [attr]: !oldItem[attr] };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  createTodoItem(textItem: string) {
    const item = {
      textItem,
      important: false,
      done: false,
      id: (this.maxId += 1),
    };
    return item;
  }

  search(items: ITodoListItem[], term: string) {
    if (term.length === 0) return items;

    return items.filter((item) => {
      return item.textItem.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  filter(items: ITodoListItem[], filter: string) {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  render() {
    const { todoData, term, filter } = this.state;

    const visibleItems = this.filter(this.search(todoData, term), filter);
    const doneCount = todoData.filter((item) => item.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <Header toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <Search onSearchChange={this.onSearchChange} />
          <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange} />
        </div>
        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteListItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <AddTodoItem onItemAdded={this.addItem} />
      </div>
    );
  }
}
