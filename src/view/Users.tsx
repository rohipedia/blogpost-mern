import React from 'react';
import { connect } from 'react-redux';
import CustomHeader from '../components/CustomHeader';
import IUser from '../models/User';
import { createUser } from '../store/actions';
import './../styles/users.css';

type UserProps = {
    users: Array<IUser>
}

const data = {
    id: 1,
    familyName: 'Vhora',
    familyHeadName: 'Arjun',
    gender: 'Male',
    children: [{
        id: 2,
        name: 'Gulshan',
        gender: 'Male',
        children: [{
            id: 3,
            name: 'Sushil',
            gender: 'Male',
            children: []
        }, {
            id: 4,
            name: 'Ritesh',
            gender: 'Male',
            children: [{
                id: 5,
                name: 'Naina',
                gender: 'Female',
                children: []
            }]
        }]
    }, {
        id: 6,
        name: 'Anil',
        gender: 'Male',
        children: [{
            id: 8,
            name: 'Rohit',
            gender: 'Male',
            children: []
        }, {
            id: 9,
            name: 'Raunak',
            gender: 'Male',
            children: []
        }]
    }, {
        id: 7,
        name: 'Kishor',
        gender: 'Male',
        children: [{
            id: 10,
            name: 'Tamanna',
            gender: 'Male',
            children: []
        }, {
            id: 11,
            name: 'Arman',
            gender: 'Male',
            children: []
        }]
    }]
}

const Users = (props: UserProps) => {

    const selectedId = 5;

    const flattenChildren = () => {
        let flattenedChildren: any[] = [data];
        const addChild = (children: any[]) => {
            children.forEach((child: any) => {
                flattenedChildren.push(child);
            })
            children.forEach((child: any) => {
                if (child.children.length !== 0) {
                    addChild(child.children);
                }
            })
        }
        addChild(data.children);
        return flattenedChildren;
    }

    
    
    const getSelectedNode = () => {
        const flattenedChildren: any[] = flattenChildren();
        const selectedNode = flattenedChildren.find((child: any) => child.id === selectedId);
        console.log(selectedNode);
        selectedNode.children.push({
            id: 14,
            name: 'XYZ',
            gender: 'Male',
            children: []
        });
    }

    getSelectedNode();
    console.log(data);



    const renderHeader = () => (<CustomHeader path='/' label="Posts"/>);

    const renderUsers = () => (
        <div className="main-container">
            <div className="users-header">
                <h1>Users</h1>
            </div>
            <div className="users-container">
                {
                    props.users.map((user, index) => (
                        <div className="user" key={index}>{user.name}</div>
                    ))
                }
            </div>
        </div>
    )

    return (
        <div>
            { renderHeader() }
            { renderUsers() }
        </div>
    );
}

export default connect(null, { createUser })(Users);