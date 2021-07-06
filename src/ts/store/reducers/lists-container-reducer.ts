import { IAction, IListsContainerState } from '../../interfaces';

const CREATE_NEW_LIST = 'CREATE-NEW-LIST';
const CHANGE_TITLE = 'CHANGE-TITLE';
const ENABLE_TITLE_EDITING_MODE = 'ENABLE-TITLE-EDITING-MODE';
const DISABLE_TITLE_EDITING_MODE = 'DISABLE-TITLE-EDITING-MODE';
const ADD_ITEM = 'ADD-ITEM';
const initialState = {
  lists: [],
};

const createNewListCreator = (): IAction => ({
  type: CREATE_NEW_LIST,
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

const listsContainerReducer = (
  state: IListsContainerState = initialState,
  action: IAction,
): IListsContainerState => {
  switch (action.type) {
    case CREATE_NEW_LIST:
      const lastId =
        state.lists.length > 0 ? state.lists[state.lists.length - 1].id : 0;

      return {
        ...state,
        lists: state.lists.concat([
          {
            id: lastId + 1,
            title: '',
            items: [],
            isReadonly: false,
            isFocused: true,
          },
        ]),
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
            ? { ...list, items: [...list.items, action.args.item] }
            : list;
        }),
      };

    default:
      return state;
  }
};

export default listsContainerReducer;
export { createNewListCreator };
export { changeTitleCreator };
export { enableTitleEditingModeCreator };
export { disableTitleEditingModeCreator };
export { addItemCreator };
