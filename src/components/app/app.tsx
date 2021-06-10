import React from 'react';
import CreateListButton from '../create-list-button/create-list-button';
import ListsContainerContainer from '../lists-container/lists-container-container';
import './app.scss';

const App = (): JSX.Element => {
  return (
    <div className="app">
      <ListsContainerContainer />
      <CreateListButton />
    </div>
  );
};

export default App;
