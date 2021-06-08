interface IAction {
  type: string;
  args?: any;
}

interface IList {
  listItem: string[];
}

interface IListsContainerState {
  listsContainer: {
    lists: IList[];
  };
}

export { IAction, IListsContainerState };
