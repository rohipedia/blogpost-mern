import { AnyAction } from "redux";
import * as types from '../actions/types';

export const locationReducer = (state = window.location.pathname, action: AnyAction) => {
    switch (action.type) {
        case types.CHANGE_LOCATION:
            return action.payload;
        default:
            return state;
    }
}