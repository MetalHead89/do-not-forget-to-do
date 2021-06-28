import React from 'react';
import { IListsContainer } from '../../ts/interfaces';
import CreateListButtonContainer from '../create-list-button/create-list-button-container';
import List from '../list/list';
import './lists-container.scss';

const ListsContainer = (props: IListsContainer) => {
  const lists = props.lists.map((item) => {
    return (
      <List
        key={item.id}
        {...item}
        changeTitle={props.changeTitle}
        enableTitleEditingMode={props.enableTitleEditingMode}
      />
    );
  });

  return (
    <div className="lists-container">
      {lists}
      <CreateListButtonContainer />
    </div>
  );
};

export default ListsContainer;
