import React from 'react';
import { IList } from '../../ts/interfaces';
import './list.scss';

const List = (props: IList) => {
  return (
    <div className="list">
      <div className="list__title-section">{props.title}</div>
      <div className="list__items-section">
        <input type="text"></input>
      </div>
    </div>
  );
};

export default List;
