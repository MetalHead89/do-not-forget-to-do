// import axios from 'axios';
import { IAction, IItem, IList, IListsContainerState } from '../../interfaces';

const SET_LISTS = 'SET-LISTS';
const CHANGE_TITLE = 'CHANGE-TITLE';
const ENABLE_TITLE_EDITING_MODE = 'ENABLE-TITLE-EDITING-MODE';
const ENABLE_ITEM_EDITING_MODE = 'ENABLE-ITEM-EDITING-MODE';
const DISABLE_TITLE_EDITING_MODE = 'DISABLE-TITLE-EDITING-MODE';
const ADD_ITEM = 'ADD-ITEM';
const CHANGE_ITEM = 'CHANGE-ITEM';
const initialState = {
  lists: [],
};

const setListsCreator = (lists: IList[]): IAction => ({
  type: SET_LISTS,
  args: { lists },
});

const changeTitleCreator = (id: number, title: string): IAction => ({
  type: CHANGE_TITLE,
  args: { id, title },
});

const enableTitleEditingModeCreator = (id: number): IAction => ({
  type: ENABLE_TITLE_EDITING_MODE,
  args: { id },
});

const disableTitleEditingModeCreator = (id: number): IAction => ({
  type: DISABLE_TITLE_EDITING_MODE,
  args: { id },
});

const addItemCreator = (id: number, item: string): IAction => ({
  type: ADD_ITEM,
  args: { id, item },
});

const changeItemCreator = (
  listId: number,
  itemId: number,
  text: string
): IAction => ({
  type: CHANGE_ITEM,
  args: { listId, itemId, text },
});

const enableItemEditingModeCreator = (
  listId: number,
  itemId: number
): IAction => ({
  type: ENABLE_ITEM_EDITING_MODE,
  args: { listId, itemId },
});

const toggleListItemsEditingMode = (items: IItem[], id: number): IItem[] => {
  return items.map((item) =>
    item.id === id ? { ...item, isReadonley: false } : item
  );
};

const getLastItemId = (items: IItem[]): number => {
  return items.reduce((id, item) => (item.id > id ? item.id : id), 0);
};

const listsContainerReducer = (
  state: IListsContainerState = initialState,
  action: IAction
): IListsContainerState => {
  switch (action.type) {
    case SET_LISTS:
      return {
        ...state,
        lists: [...state.lists, ...action.args.lists],
      };

    case CHANGE_TITLE:
      return {
        ...state,
        lists: state.lists.map((item) => {
          return item.id === action.args.id
            ? { ...item, title: action.args.title }
            : item;
        }),
      };

    case ENABLE_TITLE_EDITING_MODE:
      return {
        ...state,
        lists: state.lists.map((item) => {
          return item.id === action.args.id
            ? { ...item, isReadonly: false }
            : item;
        }),
      };

    case DISABLE_TITLE_EDITING_MODE:
      return {
        ...state,
        lists: state.lists.map((item) => {
          return item.id === action.args.id
            ? { ...item, isReadonly: true, isFocused: false }
            : item;
        }),
      };

    case ADD_ITEM:
      return {
        ...state,
        lists: state.lists.map((list) => {
          return list.id === action.args.id && action.args.item !== ''
            ? {
                ...list,
                items: [
                  ...list.items,
                  {
                    id: getLastItemId(list.items) + 1,
                    text: action.args.item,
                    isReadonly: true,
                  },
                ],
              }
            : list;
        }),
      };

    case ENABLE_ITEM_EDITING_MODE:
      return {
        ...state,
        lists: state.lists.map((list) => {
          return list.id === action.args.listId
            ? {
                ...list,
                items: toggleListItemsEditingMode(
                  list.items,
                  action.args.itemId
                ),
              }
            : list;
        }),
      };

    default:
      return state;
  }
};

export default listsContainerReducer;
export { setListsCreator };
export { changeTitleCreator };
export { enableTitleEditingModeCreator };
export { disableTitleEditingModeCreator };
export { addItemCreator };
export { enableItemEditingModeCreator };
export { changeItemCreator };
