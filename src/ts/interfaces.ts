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

interface IList extends IListState {
  changeTitle: (id: number, title: string) => void;
  enableTitleEditingMode: (id: number) => void;
  disableTitleEditingMode: (id: number) => void;
  addItem: (id: number, item: string) => void;
  changeItem: (listId: number, itemId: number, text: string) => void;
}

interface IListState {
  id: number;
  title: string;
  isReadonly: boolean;
  isFocused: boolean;
  items: IItem[];
}

interface IListsContainer {
  lists: IListState[];
  changeTitle: (id: number, title: string) => void;
  enableTitleEditingMode: (id: number) => void;
  disableTitleEditingMode: (id: number) => void;
  addItem: (id: number, item: string) => void;
  changeItem: (listId: number, itemId: number, text: string) => void;
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
  IItem,
};
