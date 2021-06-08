import { connect } from 'react-redux';
import { IDispatch } from '../../ts/interfaces';
import { createNewListCreator } from '../../ts/store/reducers/lists-container-reducer';
import addListButton from './add-list-button';

const mapDispatchToProps = (dispatch: IDispatch) => {
  return {
    createNewList: (): void => {
      dispatch(createNewListCreator());
    },
  };
};

const addListButtonContainer = connect(mapDispatchToProps)(addListButton);

export default addListButtonContainer;
