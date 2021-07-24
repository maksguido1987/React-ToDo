/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { ISearch, ISearchState } from '../../interfaces/interfaces';

export default class Search extends Component<ISearch, ISearchState> {
  constructor(props: ISearch) {
    super(props);
    this.state = {
      term: '',
    };
  }

  onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    this.setState({ term });
    const { onSearchChange } = this.props;
    onSearchChange(term);
  };

  render() {
    const { term } = this.state;
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="type to search"
        value={term}
        onChange={this.onSearchChange}
      />
    );
  }
}
