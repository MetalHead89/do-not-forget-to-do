import { IAction, IListsContainerState } from '../../interfaces';

const CREATE_NEW_LIST = 'CREATE-NEW-LIST';
const CHANGE_TITLE = 'CHANGE-TITLE';
const ENABLE_TITLE_EDITING_MODE = 'ENABLE-TITLE-EDITING-MODE';
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
          { id: lastId + 1, title: 'Новый список', items: [], readonly: true },
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
            ? { ...item, readonly: false }
            : item;
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
