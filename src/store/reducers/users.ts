import { AnyAction } from "redux";
import * as types from '../actions/types';

export const usersReducer = (state = [], action: AnyAction) => {
    switch (action.type) {
        case types.GET_USERS:
            return [ ...state, ...action.payload.data.users ];
        default:
            return state;
    }
}