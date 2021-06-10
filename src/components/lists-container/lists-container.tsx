import React from 'react';
import { IListsContainerState } from '../../ts/interfaces';
import './lists-container.scss';

const ListsContainer = (props: IListsContainerState) => {
  const lists = props.lists.map((item) => {
    return <div className="list" key={item.id}></div>;
  });

  return <div className="lists-container"> {lists} </div>;
};

export default ListsContainer;
