import { combineReducers, createStore } from 'redux';
import { useSelector as _useSelector, TypedUseSelectorHook } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// we will use the duck pattern: https://github.com/erikras/ducks-modular-redux
import exampleReducer from './ducks/example.duck';

// this combines all other reducers into one big one for the store
const rootReducer = combineReducers({
  example: exampleReducer,
});

// useful to type the `useSelector` hook
type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  // add devtools integration, download for your browser to debug redux easily: https://github.com/zalmoxisus/redux-devtools-extension
  composeWithDevTools(),
);

// a typed `useSelector` hook - use this one instead of the base `react-redux` one
export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;