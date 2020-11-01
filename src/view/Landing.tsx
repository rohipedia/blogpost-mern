import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Router } from 'react-router';
import history from '../history';
import IPost from '../models/Post';
import { deletePost, getPosts, getUsers } from '../store/actions';
import CreatePost from './CreatePost';
import CreateUser from './CreateUser';
import Posts from './Posts';
import Users from './Users';

type LandingProps = {
    posts: Array<IPost>,
    users: Array<any>,
    location: string,
    getPosts: () => any,
    deletePost: (id: string) => any,
    getUsers: () => any
}

class Landing extends Component<LandingProps> {

    componentDidMount() {
        this.props.getPosts();
        this.props.getUsers();
    }

    componentDidUpdate(prevProps: LandingProps) {
        if (prevProps.location !== this.props.location) {
            history.push(this.props.location);
        }
    }

    renderPosts = () => (
        <div>
            { <Posts posts={this.props.posts} onDelete={(id: string) => this.props.deletePost(id)}/> }
        </div>
    )

    renderPostCreateForm = () => (<div><CreatePost id={this.props.posts.length + 1}/></div>);

    renderUsers = () => (<Users users={this.props.users} />)

    render() {
        return (
            <Router history={history}>
                <Route path="/" exact component={this.renderPosts}></Route>
                <Route path="/new-post" exact component={this.renderPostCreateForm} />
                <Route path="/users" exact component={this.renderUsers} />
                <Route path="/create-user" exact component={CreateUser} />
            </Router>
        );
    }
}


const mapStateToProps = (state: any) => {
    const { posts, users, location } = state;
    return { posts, users, location };
}

export const actions = () => ({ getPosts, deletePost, getUsers });

export default connect(mapStateToProps, actions())(Landing);