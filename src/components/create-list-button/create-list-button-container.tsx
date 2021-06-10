import { connect } from 'react-redux';
import { IDispatch } from '../../ts/interfaces';
import { createNewListCreator } from '../../ts/store/reducers/lists-container-reducer';
import createListButton from './create-list-button';

const mapDispatchToProps = (dispatch: IDispatch) => {
  return {
    clickToButton: () => {
      dispatch(createNewListCreator());
    },
  };
};

const createListButtonContainer = connect(
  null,
  mapDispatchToProps,
)(createListButton);

export default createListButtonContainer;
