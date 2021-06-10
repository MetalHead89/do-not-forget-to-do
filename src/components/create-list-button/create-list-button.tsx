import React from 'react';
import { ICreateListButton } from '../../ts/interfaces';
import './create-list-button.scss';

const CreateListButton = (props: ICreateListButton) => {
  return (
    <button
      className="create-list-button"
      onClick={() => props.clickToButton()}
    />
  );
};

export default CreateListButton;
