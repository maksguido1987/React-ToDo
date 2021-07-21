import React, { FC } from 'react';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';

const Search: FC = () => {
  return (
    <div>
      <input type="text" placeholder="search" />
      <ItemStatusFilter />
    </div>
  );
};

export default Search;
