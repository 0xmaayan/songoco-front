// action types
import {
  API,
  SITE_FETCH_TRACKS,
  SET_CHOSEN_TRACK,
  SET_CHOSEN_TRACK_VIDEO,
  IS_LOADING,
  HAS_ERROR
} from '../types';
// api
import {api} from '../api';
// config
import { config } from '../../../common/config';

export const siteFetchTracks = (term) => (api({
  type: API,
  payload: {
      url: {
          base: config.API_URL,
          endpoint: 'search/' + term
      },
      method: 'post',
      params : {},
      loader:  (bool) => tracksIsLoading(bool),
      success: (data) => siteFetchDataSuccess(data),
      failure: (data) => tracksHasError(data)
  }
}));

export const fetchChosenTrack = (id) => (api({
  type: API,
  payload: {
      url: {
          base: config.API_URL,
          endpoint: 'track/' + id
      },
      method: 'post',
      params : {},
      loader:  (bool) => tracksIsLoading(bool),
      success: (data) => setChosenTrack(data),
      failure: (data) => tracksHasError(data)
  }
}));

export const fetchChosenTrackVideo = (term) => (api({
  type: API,
  payload: {
      url: {
          base: config.API_URL,
          endpoint: 'video'
      },
      method: 'post',
      data : {
        q: term.song + ' ' + term.artist,
      },
      loader:  (bool) => tracksIsLoading(bool),
      success: (data) => setChosenTrackVideo(data),
      failure: (data) => tracksHasError(data)
  }
}));

export function setChosenTrack(data){
  return {
    type: SET_CHOSEN_TRACK,
    payload: data
  };
}

export function setChosenTrackVideo(data){
  return {
    type: SET_CHOSEN_TRACK_VIDEO,
    payload: data
  };
}

export function siteFetchDataSuccess(data){
  return {
    type: SITE_FETCH_TRACKS,
    payload: data
  };
}

export function tracksIsLoading(bool){
  return {
    type: IS_LOADING,
    isLoading: bool
  };
}

export function tracksHasError(bool){
  return {
    type: HAS_ERROR,
    hasError: bool
  };
}
