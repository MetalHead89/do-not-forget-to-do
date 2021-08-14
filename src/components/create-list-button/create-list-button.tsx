import axios from 'axios';
import React from 'react';
import { ICreateListButton } from '../../ts/interfaces';
import './create-list-button.scss';

function handleCreateListButtonClick() {
  const promise = axios.post('http://localhost:5000/api/list/add-list', {
    title: 'Новый список',
    items: [],
    isReadonly: false,
    isFocused: true,
  });
  console.log('qwer');
  return promise.then((response) => response.data);
}

const CreateListButton = (props: ICreateListButton) => {
  return (
    <button
      className="create-list-button"
      onClick={ handleCreateListButtonClick }
      // onClick={() => props.clickToButton()}
    />
  );
};

export default CreateListButton;
