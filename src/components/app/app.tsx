import React from 'react';
import CreateListButtonContainer from '../create-list-button/create-list-button-container';
import ListsContainerContainer from '../lists-container/lists-container-container';
import './app.scss';

const App = (): JSX.Element => {
  return (
    <div className="app">
      <ListsContainerContainer />
      <CreateListButtonContainer />
    </div>
  );
};

export default App;
