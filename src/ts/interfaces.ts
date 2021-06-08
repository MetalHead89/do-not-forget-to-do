interface IList {
  listItem: string[];
}

interface IListsContainerState {
  listsContainer: {
    lists: IList[];
  };
}

export { IListsContainerState };
