import React, { createRef } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import CustomHeader from '../components/CustomHeader';
import PostForm from '../components/PostForm';
import IPost from '../models/Post';
import { createPost } from '../store/actions';

const CreatePost = (props: any) => {

    /** Variable declarations */
    const initialValues: IPost = {
        id: '',
        title: '',
        content: ''
    }
    /** Declarations using Hooks */
    const formRef: any = createRef();

    /** Helper Methods */
    const onSubmit = () => {
        const { values } = formRef.current;
        const post: IPost = { ...values, id: props.id };
        props.createPost(post);
    }

    /** Helper render methods */
    const renderHeader = () => <CustomHeader path='/' label="Posts"/>

    /** Component JSX */
    return (
        <div>
            { renderHeader() }
            <PostForm initialValues={initialValues} ref={formRef}/>
            <button type="submit"className="ui basic button" onClick={onSubmit}>Create Post</button>
        </div>
    );
}

export default connect(null, { createPost })(CreatePost);