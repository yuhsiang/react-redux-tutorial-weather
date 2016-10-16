import { FETCH_WEATHER } from '../constants/actionType';
import _ from 'lodash';

export default  (state=[], action) => {
  switch (action.type) {
  case FETCH_WEATHER:
    console.log(state);
    return [action.payload.data, ...state];

  }
  return state;
}
