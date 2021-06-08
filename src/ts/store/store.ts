import { combineReducers, createStore } from 'redux';
import listsContainerReducer from './reducers/lists-container-reducer';

// Собирает переданные в параметрах reducers в один объект
const reducers = combineReducers({
  listsContainer: listsContainerReducer,
});

// Создает store исходя из полученных в параметрах reducers
const store = createStore(reducers);

export default store;
