import { connect } from 'react-redux';
import { IDispatch, IState } from '../../ts/interfaces';
import listsContainer from './lists-container';

const mapStateToProps = (state: IState) => {
  return { lists: state.listsContainer.lists };
};

const ListsContainerContainer = connect(mapStateToProps)(listsContainer);

export default ListsContainerContainer;
