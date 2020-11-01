import React, { createRef } from 'react';
import { connect } from 'react-redux';
import CustomHeader from '../components/CustomHeader';
import UserForm from '../components/UserForm';
import IUser from '../models/User';
import { createUser } from '../store/actions';

type UserProps = {
    createUser: (user: IUser) => any
}

const CreateUser = (props: UserProps) => {
    const initialValues: IUser = {
        name: 'Rohit',
        email: '',
        designation: '',
        age: '',
        city: ''
    }

    const userFormRef: any = createRef();

    const handleCreateUser = () => {
        const { values } = userFormRef.current;
        props.createUser(values);
    }

    return (
        <div>
            <CustomHeader path='/' label="Posts"/>
            <UserForm initialValues={initialValues} ref={userFormRef}/>
            <br />
            <button className="ui basic button" onClick={handleCreateUser}>Create</button>
        </div>
    );
}

export default connect(null, { createUser })(CreateUser);
