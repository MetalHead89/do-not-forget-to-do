import React from 'react';
import { IList } from '../../ts/interfaces';
import './list.scss';

const List = (props: IList) => {
  const items = props.items.map((item) => {
    return <input className="list__item" type="text" value={item}></input>;
  });

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

  function handleItemBlur(event: React.ChangeEvent<HTMLInputElement>) {
    props.addItem(props.id, event.target.value);
    event.target.value = '';
  }

  function handleItemKeyPress(event: React.KeyboardEvent) {
    const target = event.target;

    if (event.key === 'Enter' && target instanceof HTMLInputElement) {
      const target = event.target;

      if (target instanceof HTMLInputElement) {
        props.addItem(props.id, target.value);
        target.value = '';
      }
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
          readOnly={props.isReadonly}
          autoFocus={props.isFocused}
        ></input>
      </div>
      <div className="list__items-section">
        {items}
        <input
          className="list__item-input"
          type="text"
          onBlur={handleItemBlur}
          onKeyDown={handleItemKeyPress}
        ></input>
      </div>
    </div>
  );
};

export default List;
