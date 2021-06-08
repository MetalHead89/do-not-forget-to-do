import { IAction, IList, IListsContainerState } from '../../interfaces';

const CREATE_NEW_LIST = 'CREATE-NEW-LIST';
const initialState = {
  listsContainer: {
    lists: [],
  },
};

const createNewListCreator = (list: IList): IAction => ({
  type: CREATE_NEW_LIST,
  args: { list },
});

const listsContainerReducer = (
  state: IListsContainerState = initialState,
  action: IAction,
): IListsContainerState => {
  switch (action.type) {
    case CREATE_NEW_LIST:
      return {
        ...state,
        listsContainer: {
          lists: state.listsContainer.lists.concat(action.args.list),
        },
      };
    default:
      return state;
  }
};

export default listsContainerReducer;
export { createNewListCreator };
