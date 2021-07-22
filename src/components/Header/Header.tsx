import React, { FC } from 'react';
import { IMoreDone } from '../../interfaces/interfaces';
import './header.scss';

const Header: FC<IMoreDone> = ({ toDo, done }) => {
  return (
    <div className="app-header d-flex">
      <h1>Todo List</h1>
      <h2>
        {toDo} more to do, {done} done
      </h2>
    </div>
  );
};

export default Header;
