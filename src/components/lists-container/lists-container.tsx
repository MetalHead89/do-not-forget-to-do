import axios from 'axios';
import React from 'react';
import { IListsContainer } from '../../ts/interfaces';
import CreateListButton from '../create-list-button/create-list-button';
import List from '../list/list';
import './lists-container.scss';

const ListsContainer = (props: IListsContainer) => {
  if (props.lists.length === 0) {
    axios.get('http://localhost:5000/api/list/get-lists').then((response) => {
      const data = response.data.map((list: any) => {
        const modifiedList = { ...list };
        modifiedList.id = modifiedList._id;
        delete modifiedList._id;

        return modifiedList;
      });

      props.setLists(data);
    });
  }

  const lists = props.lists.map((item) => {
    return (
      <List
        key={item.id}
        {...item}
        changeTitle={props.changeTitle}
        enableTitleEditingMode={props.enableTitleEditingMode}
        disableTitleEditingMode={props.disableTitleEditingMode}
        addItem={props.addItem}
        changeItem={props.changeItem}
      />
    );
  });

  return (
    <div className="lists-container">
      {lists}
      <CreateListButton />
    </div>
  );
};

export default ListsContainer;
