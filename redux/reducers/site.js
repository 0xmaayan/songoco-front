import { INITIAL_STATE } from '../../common/app-const';

import {
  SITE_SET_TERM,
  GET_TOKEN,
  IS_LOADING,
  HAS_ERROR
} from '../actions/types';

export default function (state = INITIAL_STATE.site, action) {
  switch(action.type) {

    case SITE_SET_TERM:
      return {...state, term: action.payload};
      
    case GET_TOKEN:
      return {...state, token: action.payload};

    case IS_LOADING:
      return {...state, isLoading: action.isLoading};

    case HAS_ERROR:
      return {...state, hasError: action.hasError};

  }

  return state;
}