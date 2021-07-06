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
  isReadonly: boolean;
  isFocused: boolean;
  changeTitle: (id: number, title: string) => void;
  enableTitleEditingMode: (id: number) => void;
  disableTitleEditingMode: (id: number) => void;
  addItem: (id: number, item: string) => void;
}

interface IListState {
  id: number;
  title: string;
  isReadonly: boolean;
  isFocused: boolean;
  items: string[];
}

interface IListsContainer {
  lists: IListState[];
  changeTitle: (id: number, title: string) => void;
  enableTitleEditingMode: (id: number) => void;
  disableTitleEditingMode: (id: number) => void;
  addItem: (id: number, item: string) => void;
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
