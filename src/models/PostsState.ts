import IPost from "./Post";

interface IPostsState {
    posts: Array<IPost>,
    editPost: IPost | null
}

export default IPostsState;