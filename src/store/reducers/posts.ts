import { AnyAction } from 'redux';
import * as type from '../actions/types';

export const postsReducer = (state = [], action: AnyAction) => {
    switch (action.type) {
        case type.GET_POSTS:
            return [...action.payload.data.posts];    
        default:
            return state;
    }
}