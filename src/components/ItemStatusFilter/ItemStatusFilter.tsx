/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { IItemStatusFilter } from '../../interfaces/interfaces';
import './item-status-filter.scss';

export default class ItemStatusFilter extends Component<IItemStatusFilter> {
  buttons = [
    { name: 'all', text: 'All' },
    { name: 'active', text: 'Active' },
    { name: 'done', text: 'Done' },
  ];

  render() {
    const { filter, onFilterChange } = this.props;
    const buttons = this.buttons.map(({ name, text }) => {
      const isActive = filter === name;
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button
          key={name}
          type="button"
          className={`btn ${clazz}`}
          onClick={() => onFilterChange(name)}
        >
          {text}
        </button>
      );
    });
    return <div className="btn-group">{buttons}</div>;
  }
}
