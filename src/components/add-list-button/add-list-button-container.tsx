import { connect } from 'react-redux';
import { IDispatch, IList } from '../../ts/interfaces';
import { createNewListCreator } from '../../ts/store/reducers/lists-container-reducer';
import addListButton from './add-list-button';

const mapDispatchToProps = (dispatch: IDispatch) => {
  return {
    clickToPrevSlideBtn: (list: IList): void => {
      dispatch(createNewListCreator(list));
    },
  };
};

const addListButtonContainer = connect(mapDispatchToProps)(addListButton);

export default addListButtonContainer;
