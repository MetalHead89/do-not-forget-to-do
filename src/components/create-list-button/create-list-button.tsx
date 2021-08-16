import axios from 'axios';
import React from 'react';
import './create-list-button.scss';

function handleCreateListButtonClick() {
  const promise = axios.post('http://localhost:5000/api/list/add-list', {
    title: 'Новый список',
    items: [],
    isReadonly: false,
    isFocused: true,
  });
  
  return promise.then((response) => response.data);
}

const CreateListButton = () => {
  return (
    <button
      className="create-list-button"
      onClick={ handleCreateListButtonClick }
    />
  );
};

export default CreateListButton;
