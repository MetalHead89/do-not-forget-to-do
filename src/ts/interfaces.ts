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
  items: string[];
}

interface IListsContainerState {
  lists: IList[];
}

interface ICreateListButton {
  clickToButton: () => void;
}

export {
  IAction,
  IList,
  IListsContainerState,
  IDispatch,
  IState,
  ICreateListButton,
};
