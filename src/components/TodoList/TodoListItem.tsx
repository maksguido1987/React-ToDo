/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { ITodoListItem } from '../../interfaces/interfaces';

export default class TodoListItem extends Component<ITodoListItem> {
  render() {
    const { textItem, done, important, onDeletedListItem, onToggleImportant, onToggleDone } =
      this.props;
    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }
    if (important) {
      classNames += ' important';
    }

    return (
      <span className={classNames}>
        <span role="presentation" className="todo-list-item-label" onClick={onToggleDone}>
          {textItem}
        </span>
        <div>
          <button
            type="button"
            onClick={onToggleImportant}
            className="btn btn-outline-success btn-sm float-right"
          >
            <i className="bi bi-exclamation-square" />
          </button>

          <button
            type="button"
            className="btn btn-outline-danger btn-sm float-right"
            onClick={onDeletedListItem}
          >
            <i className="bi bi-archive-fill" />
          </button>
        </div>
      </span>
    );
  }
}
