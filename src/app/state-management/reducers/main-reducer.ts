// import {Action} from '@ngrx/store';
import {ADDTOCART} from '../actions/main-action-creator';


export interface Action {
  type: string;
  payload?: any;
}


export function cartItemReducer(state: any = [], action: Action) {
  switch (action.type) {
    case ADDTOCART:

      state = action.payload;
      console.log(state);

      return action.payload;
    default:
      return state;
  }
}
