interface IAction {
  type: string;
  args?: any;
}

interface IDispatch {
  (action: IAction): void;
}

interface IState {
  listsContainer: IListsContainerState;
}

interface IList {
  listItem: string[];
}

interface IListsContainerState {
  listsContainer: {
    lists: IList[];
  };
}

export { IAction, IList, IListsContainerState, IDispatch, IState };
