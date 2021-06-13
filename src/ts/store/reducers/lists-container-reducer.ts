import { IAction, IListsContainerState } from '../../interfaces';

const CREATE_NEW_LIST = 'CREATE-NEW-LIST';
const initialState = {
  lists: [],
};

const createNewListCreator = (): IAction => ({
  type: CREATE_NEW_LIST,
});

const listsContainerReducer = (
  state: IListsContainerState = initialState,
  action: IAction
): IListsContainerState => {
  switch (action.type) {
    case CREATE_NEW_LIST:
      const lastId =
        state.lists.length > 0 ? state.lists[state.lists.length - 1].id : 0;

      return {
        ...state,
        lists: state.lists.concat([
          { id: lastId + 1, title: 'Новый список', items: [] },
        ]),
      };

    default:
      return state;
  }
};

export default listsContainerReducer;
export { createNewListCreator };
