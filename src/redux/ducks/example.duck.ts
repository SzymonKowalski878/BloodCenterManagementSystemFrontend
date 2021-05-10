// an enum defining this reducer's action types
enum ActionType {
  SAMPLE = 'pz-2021/example/SAMPLE', // like described in the ducks specification: module-name/reducer-name/ACTION_NAME
  CLEAR = 'pz-2021/example/CLEAR',
}

// generic action for this reducer
interface Action {
  type: ActionType;
  payload: unknown;
}

// here we create specific action types extending from the generic one
interface SampleAction extends Action {
  type: ActionType.SAMPLE;
  payload: number;
}

// `Pick` generic allows us to choose only some of the properties of a base type
// https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys
interface ClearAction extends Pick<Action, 'type'> {
  type: ActionType.CLEAR;
}

// this type uses an union to combine all of the types
// thanks to that, in the reducer TypeScript can infer payload type based on the `type`
type ReducerAction = SampleAction | ClearAction;

interface State {
  count: number;
}

// initial state so we don't start with undefined variables
// really useful when you have arrays or objects in the state
const initialState: State = {
  count: 0,
}

// the reducer function, accepts a state and an action and returns a new state
export default function reducer(state: State = initialState, action: ReducerAction): State {
  switch (action.type) {
    case ActionType.SAMPLE:
      // the state is ALWAYS immutable - if it changed you HAVE to return a new object
      // the spread operator helps here - it copies all of the properties of the `state` variable to the new object
      return { ...state, count: action.payload };
    case ActionType.CLEAR:
      return { ...state, count: 0 };
  }

  return state;
}

// action creators: helper functions to create `dispatch payloads`
export function doSample(count: number): SampleAction {
  return {
    type: ActionType.SAMPLE,
    payload: count,
  };
}

export function doClear(): ClearAction {
  return { type: ActionType.CLEAR };
}