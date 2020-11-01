import { Field } from 'formik';
import React from 'react';

const FormikField = (props: any) => {
    const { name, type, id, placeholder } = props.details;
    return (
        <div className="">
            <label htmlFor={name} style={{textTransform: 'capitalize'}}>{name}</label>
            <Field type={type} id={id} name={name} placeholder={placeholder}></Field>
        </div>
    );
}

export default FormikField;
