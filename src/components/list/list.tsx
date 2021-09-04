import React from 'react';
import { IList } from '../../ts/interfaces';
import './list.scss';

const List = (props: IList) => {
  const items = props.items.map((item) => {
    return (
      <input
        key={item.id}
        className="list__item"
        type="text"
        value={item.text}
        readOnly={item.isReadonly}
      ></input>
    );
  });

  function handleTitleInput(event: React.ChangeEvent<HTMLInputElement>) {
    props.changeTitle(props.id, event.target.value);
  }

  function handleTitleDoubleClick() {
    props.enableTitleEditingMode(props.id);
  }

  function handleTitleBlur(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value.trim() === '') {
      props.changeTitle(props.id, 'Новый список');
    }

    props.disableTitleEditingMode(props.id);
  }

  function handleTitleKeyPress(event: React.KeyboardEvent) {
    const target = event.target;

    if (event.key === 'Enter' && target instanceof HTMLInputElement) {
      target.blur();
    }
  }

  function handleTitleFocus(event: React.FocusEvent<HTMLInputElement>) {
    event.target.select();
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
          readOnly={props.isReadonly}
          autoFocus={props.isFocused}
          onInput={handleTitleInput}
          onDoubleClick={handleTitleDoubleClick}
          onBlur={handleTitleBlur}
          onKeyPress={handleTitleKeyPress}
          onFocus={handleTitleFocus}
        ></input>
      </div>
      <div className="list__items-section">
        {items}
        <button className="list__button-close"></button>
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
