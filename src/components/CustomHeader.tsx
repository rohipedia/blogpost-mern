import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { changeLocation } from '../store/actions';

const CustomHeader = (props: any) => {

    const history = useHistory();
    const userBtn = history.location.pathname === '/create-user' ? { path: '/users', name: 'Users' } : { path: '/create-user', name: 'Create User' };

    return (
        <div>
            <button type="submit" className="ui basic button" onClick={ () => props.changeLocation(props.path) }>
                { props.label }
            </button>
            <button type="button" className="right floated ui primary button" onClick={ () => props.changeLocation(userBtn.path) }>
                { userBtn.name }
            </button>
            <hr />
        </div>
    );
}

export default connect(null, { changeLocation })(CustomHeader);
