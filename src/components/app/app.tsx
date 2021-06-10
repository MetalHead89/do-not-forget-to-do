import React from 'react';
import AddListButton from '../add-list-button/add-list-button';
import ListsContainerContainer from '../lists-container/lists-container-container';
import './app.scss';

const App = (): JSX.Element => {
  return (
    <div className="app">
      <ListsContainerContainer />
      <AddListButton />
    </div>
  );
};

export default App;
