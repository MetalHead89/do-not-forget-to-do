import { connect } from 'react-redux';
import { IDispatch } from '../../ts/interfaces';
import { createNewListCreator } from '../../ts/store/reducers/lists-container-reducer';
import createListButton from './create-list-button';

const mapDispatchToProps = (dispatch: IDispatch) => {
  return {
    createNewList: (): void => {
      dispatch(createNewListCreator());
    },
  };
};

const createListButtonContainer = connect(mapDispatchToProps)(createListButton);

export default createListButtonContainer;
