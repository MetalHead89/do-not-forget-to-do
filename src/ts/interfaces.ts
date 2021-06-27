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
  id: number;
  title: string;
  items: string[];
  changeTitle: (id: number, title: string) => void;
}

interface IListState {
  id: number;
  title: string;
  items: string[];
}

interface IListsContainer {
  lists: IListState[];
  changeTitle: (id: number, title: string) => void;
}

interface IListsContainerState {
  lists: IListState[];
}

interface ICreateListButton {
  clickToButton: () => void;
}

export {
  IAction,
  IList,
  IListsContainer,
  IListsContainerState,
  IDispatch,
  IState,
  ICreateListButton,
};
