import { connect } from 'react-redux';
import { IDispatch, IState } from '../../ts/interfaces';
import ListsContainer from './lists-container';
import {
  changeTitleCreator,
  enableTitleEditingModeCreator,
  disableTitleEditingModeCreator,
  addItemCreator,
  changeItemCreator,
} from '../../ts/store/reducers/lists-container-reducer';

const mapStateToProps = (state: IState) => {
  return { lists: state.listsContainer.lists };
};

const mapDispatchToProps = (dispatch: IDispatch) => {
  return {
    changeTitle: (id: number, title: string) => {
      dispatch(changeTitleCreator(id, title));
    },
    enableTitleEditingMode: (id: number) => {
      dispatch(enableTitleEditingModeCreator(id));
    },
    disableTitleEditingMode: (id: number) => {
      dispatch(disableTitleEditingModeCreator(id));
    },
    addItem: (id: number, item: string) => {
      dispatch(addItemCreator(id, item));
    },
    changeItem: (listId: number, itemId: number, text: string) => {
      dispatch(changeItemCreator(listId, itemId, text));
    },
  };
};

const ListsContainerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListsContainer);

export default ListsContainerContainer;
