import React from 'react';
import { IListsContainerState } from '../../ts/interfaces';

const ListsContainer = (props: IListsContainerState) => {
  const lists = props.lists.map((item) => {
    return <div className="list"></div>;
  });

  return <div className="lists-container"> {lists} </div>;
};

export default ListsContainer;
