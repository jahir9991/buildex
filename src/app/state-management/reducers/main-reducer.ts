import {Action} from '@ngrx/store';
import {DECREMENT, INCREMENT} from "../actions/main-action-creator";




export function InputValueReducer(state: number = 0, action: Action) {
  switch (action.type) {
    case INCREMENT:

      return state+1;
 case DECREMENT:


      return state-1;


    default:
      return state;
  }
}
