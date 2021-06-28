import React from 'react';
import { IList } from '../../ts/interfaces';
import './list.scss';

const List = (props: IList) => {
  function handleTitleInput() {
    console.log('dfsdf');
    // const value = event.target !== null ? event.target.value : ''
    // props.changeTitle(props.id, event.target.value);
  }

  return (
    <div className="list">
      <div className="list__title-section">
        <input
          type="text"
          className="list__title"
          value={props.title}
          onInput={handleTitleInput}
          // onDoubleClick={() => props.enableTitleEditingMode(props.id)}
          // readOnly={props.readonly}
        ></input>
      </div>
      <div className="list__items-section">
        <input type="text"></input>
      </div>
    </div>
  );
};

export default List;
