import { INITIAL_STATE } from '../../common/app-const';

import {
  FETCH_ARTIST_INFO,
  FETCH_SONG_INFO,
} from '../actions/types';

export default function (state = INITIAL_STATE.tracks, action) {
  switch(action.type) {
    
  case FETCH_ARTIST_INFO:
    return {...state, info: {...state.info, artist: action.payload.data.artist}};

  case FETCH_SONG_INFO:
    return {...state, info: {...state.info, song: action.payload.data}};

  }

  return state;
}