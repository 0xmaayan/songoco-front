// action types
import {
  API,
  GET_TOKEN,
  IS_LOADING,
  HAS_ERROR
} from '../types';
// api
import {api} from '../api';
// config
import { config } from '../../../common/config';

export const siteGetToken = () => (api({
  type: API,
  payload: {
      url: {
          base: config.API_URL,
          endpoint: 'getToken'
      },
      method: 'get',
      params : {},
      loader:  (bool) => tokenIsLoading(bool),
      success: (data) => setToken(data),
      failure: (data) => tokenHasError(data)
  }
}));

export function setToken(data){
  return {
    type: GET_TOKEN,
    payload: data
  };
}

export function tokenIsLoading(bool){
  return {
    type: IS_LOADING,
    isLoading: bool
  };
}

export function tokenHasError(bool){
  return {
    type: HAS_ERROR,
    hasError: bool
  };
}

