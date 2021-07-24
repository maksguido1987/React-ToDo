/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import { IAddTodoItem, IAddTodoItemState } from '../../interfaces/interfaces';
import './add-todo-item.scss';

export default class AddTodoItem extends Component<IAddTodoItem, IAddTodoItemState> {
  constructor(props: IAddTodoItem) {
    super(props);
    this.state = {
      text: '',
    };
  }

  onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: e.target.value });
  };

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { onItemAdded } = this.props;
    const { text } = this.state;
    onItemAdded(text);
    this.setState({ text: '' });
  };

  render() {
    const { text } = this.state;
    return (
      <form className="add-todo-form d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="What needs to be done"
          onChange={this.onTextChange}
          value={text}
        />
        <button type="submit" className="btn btn-outline-secondary">
          Add
        </button>
      </form>
    );
  }
}
