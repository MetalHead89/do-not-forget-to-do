import { IAction, IList, IListsContainerState } from '../../interfaces';

const CREATE_NEW_LIST = 'CREATE-NEW-LIST';
const initialState = {
  lists: [],
};

const createNewListCreator = (): IAction => ({
  type: CREATE_NEW_LIST,
});

const listsContainerReducer = (
  state: IListsContainerState = initialState,
  action: IAction,
): IListsContainerState => {
  switch (action.type) {
    case CREATE_NEW_LIST:
      return {
        ...state,
        lists: state.lists.concat([]),
      };
    default:
      return state;
  }
};

export default listsContainerReducer;
export { createNewListCreator };
