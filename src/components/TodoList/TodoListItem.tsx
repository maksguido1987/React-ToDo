/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { ITodoListItem, ITodoListState } from '../../interfaces/interfaces';

export default class TodoListItem extends Component<ITodoListItem, ITodoListState> {
  constructor(props: ITodoListItem) {
    super(props);
    this.state = {
      done: false,
      important: false,
    };
  }

  onLabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done,
      };
    });
  };

  onMarkImportant = () => {
    this.setState(({ important }) => {
      return {
        important: !important,
      };
    });
  };

  render() {
    const { textItem, onDeletedListItem } = this.props;
    const { done, important } = this.state;
    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }
    if (important) {
      classNames += ' important';
    }

    return (
      <span className={classNames}>
        <span role="presentation" className="todo-list-item-label" onClick={this.onLabelClick}>
          {textItem}
        </span>
        <div>
          <button
            type="button"
            onClick={this.onMarkImportant}
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
