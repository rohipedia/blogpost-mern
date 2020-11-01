import { Form, Formik } from 'formik';
import React, { forwardRef, useEffect, useState } from 'react';
import FormikField from './FormikField';

const UserForm = forwardRef((props: any, ref: any) => {

    /** Variable declarations */
    const fields: Array<IField> = [
        { name: 'name', type: 'text', id: 'name', placeholder: 'Enter name' },
        { name: 'email', type: 'email', id: 'email', placeholder: 'Enter email id' },
        { name: 'designation', type: 'text', id: 'designation', placeholder: 'Enter designation' },
        { name: 'age', type: 'text', id: 'age', placeholder: 'Enter age' },
        { name: 'city', type: 'text', id: 'city', placeholder: 'Enter city' }
    ];

    /** Declaration using hooks */
    const [initialValues, setInitialValues] = useState({} as any);

    useEffect(() => {
        if (props.initialValues) {
            setInitialValues(props.initialValues);
        }
    }, [props.initialValues]);

    const renderForm = () => (
        <Formik initialValues={initialValues} onSubmit={() => console.log(ref)} innerRef={ref}>
            <Form>
                { fields.map((field: IField) => <FormikField key={field.name} details={field} />) }
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

export default UserForm;

interface IField {
    name: string,
    type: string,
    id: string,
    placeholder: string
}