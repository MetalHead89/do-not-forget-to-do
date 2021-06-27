import { connect } from 'react-redux';
import { IDispatch, IState } from '../../ts/interfaces';
import ListsContainer from './lists-container';
import { changeTitleCreator } from '../../ts/store/reducers/lists-container-reducer';

const mapStateToProps = (state: IState) => {
  return { lists: state.listsContainer.lists };
};

const mapDispatchToProps = (dispatch: IDispatch) => {
  return {
    changeTitle: (id: number, title: string) => {
      dispatch(changeTitleCreator(id, title));
    },
  };
};

const ListsContainerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListsContainer);

export default ListsContainerContainer;
