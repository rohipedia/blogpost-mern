import { Dispatch } from 'redux';
import axios from '../../api/index';
import IPost from '../../models/Post';
import IUser from '../../models/User';
import * as type from './types';


export const getPosts = () => async(dispatch: Dispatch, getState: any) => {
    const payload = await axios.get("/api/posts");
    dispatch( { type: type.GET_POSTS, payload } );
};

export const createPost = (post: IPost) => {
    return async(dispatch: Dispatch) => {
        const payload = await axios.post("api/post", post);
        dispatch( { type: type.GET_POSTS, payload } );
        dispatch( { type: type.CHANGE_LOCATION, payload: '/' });
    }
}

export const deletePost = (postId: string) => async(dispatch: Dispatch) => {
    const payload = await axios.delete(`api/post/${postId}`);
    dispatch( { type: type.GET_POSTS, payload } );
}

export const updatePost = (post: IPost) => async(dispatch: Dispatch) => {
    const payload = await axios.put(`api/post/${post.id}`, post);
    dispatch( { type: type.GET_POSTS, payload } );
}

export const getUsers = () => async (dispatch: Dispatch) => {
    const payload = await axios.get('/api/users');
    dispatch( {type: type.GET_USERS, payload } );
}

export const createUser = (user: IUser) => async(dispatch: Dispatch) => {
    const payload = await axios.post('/api/users', user);
    dispatch( { type: type.GET_USERS, payload } );
}

export const changeLocation = (location: string) => (dispatch: Dispatch) => {
    dispatch({ type: type.CHANGE_LOCATION, payload: location });
}
