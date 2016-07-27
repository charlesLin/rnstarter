import {createStore, applyMiddleware, compose} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer  from '../reducers';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';

export default function configureStore(initialState) {
  return createStore(
    rootReducer, initialState, compose(applyMiddleware(thunk,
      reduxImmutableStateInvariant()),
      devTools())
  );
}