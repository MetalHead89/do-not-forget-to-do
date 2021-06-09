import { connect } from 'react-redux';
import { IDispatch, IState } from '../../ts/interfaces';
import listsContainer from './lists-container';

const mapStateToProps = (state: IState) => {
  return { listsContainer: state.listsContainer };
};

const listsContainerContainer = connect(mapStateToProps)(listsContainer);

export default listsContainerContainer;
