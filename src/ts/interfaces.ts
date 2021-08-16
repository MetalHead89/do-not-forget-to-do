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

interface IItem {
  id: number;
  text: string;
  isReadonly: boolean;
}

interface IListState {
  id: number;
  title: string;
  isReadonly: boolean;
  isFocused: boolean;
  items: IItem[];
}

interface IListMethods {
  changeTitle: (id: number, title: string) => void;
  enableTitleEditingMode: (id: number) => void;
  disableTitleEditingMode: (id: number) => void;
  addItem: (id: number, item: string) => void;
  changeItem: (listId: number, itemId: number, text: string) => void;
}

interface IList extends IListState, IListMethods {}

interface IListsContainer extends IListMethods {
  lists: IListState[];
  setLists: (lists: IList[]) => void;
}

interface IListsContainerState {
  lists: IListState[];
}

export {
  IAction,
  IList,
  IListsContainer,
  IListsContainerState,
  IDispatch,
  IState,
  IItem,
};
