/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import { IAddTodoItem } from '../../interfaces/interfaces';
import './add-todo-item.scss';

export default class AddTodoItem extends Component<IAddTodoItem> {
  render() {
    const { onItemAdded } = this.props;
    return (
      <div className="add-todo-item">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => onItemAdded('hello world')}
        >
          Add Item
        </button>
      </div>
    );
  }
}
