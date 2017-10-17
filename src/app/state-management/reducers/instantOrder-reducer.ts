
import {INSTANTORDER} from '../actions/main-action-creator';


export interface Action {
  type: string;
  payload?: any;
}


export function instantOrderReducer(state: any = null, action: Action) {
  switch (action.type) {
    case INSTANTORDER:

      state = action.payload;
      console.log(state);

      return action.payload;
    default:
      return state;
  }
}
