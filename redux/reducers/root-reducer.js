import { combineReducers } from 'redux';

import tracks from './tracks';
import site from './site';

export default combineReducers({
    tracks,
    site,
});
