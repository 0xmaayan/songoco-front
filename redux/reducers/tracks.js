import { INITIAL_STATE } from '../../common/app-const';

import {
  SITE_FETCH_TRACKS,
  FETCH_TRACK,
  ON_CHOSEN_TRACK,
  SET_CHOSEN_TRACK,
  SET_CHOSEN_TRACK_VIDEO,
  IS_LOADING,
  HAS_ERROR,
} from '../actions/types';

export default function (state = INITIAL_STATE.tracks, action) {
  switch(action.type) {
    
    case SITE_FETCH_TRACKS:
      return {...state, data: action.payload};

    case SET_CHOSEN_TRACK:
      return {...state, chosenTrack: {...state.chosenTrack, info: action.payload}};

    case SET_CHOSEN_TRACK_VIDEO:
      return {...state, chosenTrack: {...state.chosenTrack, video: action.payload}};

    case IS_LOADING:
      return {...state, isLoading: action.isLoading};

    case HAS_ERROR:
      return {...state, hasError: action.hasError};

  }

  return state;
}