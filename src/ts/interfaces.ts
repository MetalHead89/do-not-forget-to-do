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
  readonly: boolean;
  changeTitle: (id: number, title: string) => void;
  enableTitleEditingMode: (id: number) => void;
}

interface IListState {
  id: number;
  title: string;
  readonly: boolean;
  items: string[];
}

interface IListsContainer {
  lists: IListState[];
  changeTitle: (id: number, title: string) => void;
  enableTitleEditingMode: (id: number) => void;
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
