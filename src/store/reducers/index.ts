import { combineReducers } from 'redux';
import { locationReducer } from './location';
import { postsReducer } from './posts';
import { usersReducer } from './users';

const state = () => ({
    posts: postsReducer,
    users: usersReducer,
    location: locationReducer
})

export default combineReducers(state());