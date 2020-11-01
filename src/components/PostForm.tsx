import { Field, Form, Formik } from 'formik';
import React, { forwardRef, useEffect, useState } from 'react';
import * as Yup from 'yup';
import '../App.css';
import IPost from '../models/Post';

const PostForm = forwardRef((props: any, ref: any) => {

    /** Variable declarations */
    const [initialValues, setInitialValues] = useState({} as IPost);
    const validationSchema = Yup.object({
        title: Yup.string().required('Title is required'),
        content: Yup.string().required('Content is required'),
    });

    /** Declaration using Hooks */
    useEffect(() => {
        const { id, title, content } = props.initialValues;
        const values = { id: (id || ''), title, content };
        setInitialValues(values);
    }, [props.initialValues]);

    /** Helper Rendering Methods */
    const renderForm = () => (
        <Formik onSubmit={() => console.log('submitted')} initialValues={initialValues} validationSchema={validationSchema} innerRef={ref}>
            <Form>
                <div className="">
                    <label htmlFor="title">Title</label>
                    <Field type="text" id="title" name="title" placeholder="Enter title"/>
                </div>
                <div className="">
                    <label htmlFor="content">Content</label>
                    <Field as="textarea" type="text" id="content" name="content" placeholder="Enter content" />
                </div>
                <br/>
            </Form>
        </Formik> 
    )

    /** Component JSX */
    return (
        <div>
            { Object.keys(initialValues).length > 0 ? renderForm() : null }
        </div>
    );
});


export default PostForm;