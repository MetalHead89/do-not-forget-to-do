import React from 'react';
import { IList } from '../../ts/interfaces';
import './list.scss';

const List = (props: IList) => {
  function handleTitleInput(event: React.ChangeEvent<HTMLInputElement>) {
    props.changeTitle(props.id, event.target.value);
  }

  function handleTitleDoubleClick(event: React.MouseEvent) {
    props.enableTitleEditingMode(props.id);

    const target = event.target;
    if (target instanceof HTMLInputElement && target.readOnly) {
      target.select();
    }
  }

  function handleTitleBlur() {
    props.disableTitleEditingMode(props.id);
  }

  function handleTitleKeyPress(event: React.KeyboardEvent) {
    const target = event.target;

    if (event.key === 'Enter' && target instanceof HTMLInputElement) {
      target.blur();
    }
  }

  return (
    <div className="list">
      <div className="list__title-section">
        <input
          type="text"
          className="list__title"
          value={props.title}
          onInput={handleTitleInput}
          onDoubleClick={handleTitleDoubleClick}
          onBlur={handleTitleBlur}
          onKeyPress={handleTitleKeyPress}
          readOnly={props.readonly}
        ></input>
      </div>
      <div className="list__items-section">
        <input type="text"></input>
      </div>
    </div>
  );
};

export default List;
