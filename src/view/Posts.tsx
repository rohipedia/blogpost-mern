import React, { createRef, useEffect, useReducer, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { connect } from 'react-redux';
import CustomHeader from '../components/CustomHeader';
import ModalPortal from '../components/Modal';
import PostForm from '../components/PostForm';
import IPost from '../models/Post';
import IPostsState from '../models/PostsState';
import { updatePost } from '../store/actions';

const initialState: IPostsState = {
    posts: [],
    editPost: null
}

const getUpdatedPost = (editPost: IPost, updatedElement: any) => {
    const updatedPost: any = {...editPost};
    for (let el in updatedElement) {
        updatedPost[el] = updatedElement[el];
    }
    return updatedPost;
}

type postAction = { type: 'UPDATE_POSTS', payload: Array<IPost> } | { type: 'TOGGLE_ACTIVE_STATE', payload: string } | { type: 'EDIT_POST', payload: string};

const reducer = (state: IPostsState, action: postAction): IPostsState => {
    switch (action.type) {
        case 'UPDATE_POSTS':
            return {...state, posts: action.payload };
        case 'TOGGLE_ACTIVE_STATE':
            const post = state.posts.find((post: IPost) => post.id === action.payload);
            if (post) {
                post.active = !post.active;
            }
            return {...state };
        case 'EDIT_POST':
            const editPost: any = {...state.posts.find((post: IPost) => post.id === action.payload)};
            return {...state, editPost };
        default:
            return state;
    }
}

const Posts = (props: any) => {
    /** Variable declarations */
    const { posts, onDelete } = props;
    const formRef: any = createRef();

    /** Declaration using hooks */
    const [state, dispatch] = useReducer(reducer, initialState);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const posts = props.posts.map((post: IPost) => ({ ...post, active: false, editing: false }));
        dispatch({ type: 'UPDATE_POSTS', payload: posts });
    }, [props.posts]);
    
    /** Helper methods */
    const handleClose = () => {
        setShowModal(false);
    }

    const onEdit = (id: string) => {
        dispatch({ type: 'EDIT_POST', payload: id});
        setShowModal(true);
    }

    const onUpdate = () => {
        const { values } = formRef.current;
        const post = posts.find((post: IPost) => {
            if (!state.editPost) {
                return null;
            }
            return post.id === state.editPost.id
        });
        if (post) {
            const updatedPost = getUpdatedPost(post, values);
            props.updatePost(updatedPost);
        }
        handleClose();
    }

    const postFormProps = {
        initialValues: state.editPost,
        ref: formRef
    }

    /** Helper render methods */
    const renderHeader = () => <CustomHeader path='new-post' label="Create Post"/>

    const renderList = () => (
        <div>
            <div className="ui styled accordion">
                { state.posts.map((post: IPost) => renderItem(post)) }
            </div>
        </div>
    )
    const renderItem = (post: IPost) => (
        <React.Fragment key={post.id}>
            <div className={`title ${post.active ? 'active' : ''}`} onClick={() => dispatch({ type: 'TOGGLE_ACTIVE_STATE', payload: post.id })}>
                <i className="dropdown icon"></i>
                { post.title }
            </div>
            <div className={`content ${post.active ? 'active' : ''}`}>
                <p className={`transition  ${!post.active ? 'hidden' : ''}`}>{ post.content }</p>
                <div className="item">
                    <div className="right floated content">
                        <button className="ui secondary button" onClick={() => onEdit(post.id)}>Edit</button>
                        <button className="ui secondary button" onClick={() => onDelete(post.id)}>Delete</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
    const renderModal = () => (
        <ModalPortal>
            { state.editPost ? (
                <Modal show={showModal} onHide={handleClose} backdrop="static" keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <PostForm {...postFormProps}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="submit"className="ui basic button" onClick={onUpdate}>Update Post</button>
                    </Modal.Footer>
                </Modal>
            ) : null }                
        </ModalPortal>
    )

    /** Component JSX */
    return (
        <>
            { renderHeader() }
            { posts.length > 0 ? renderList() : 'Create a post to begin...' }
            { renderModal() }
        </>
    );
}

export default connect(null, { updatePost })(Posts);