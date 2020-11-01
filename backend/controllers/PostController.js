const Post = require('../models/post');

exports.getPosts = (req, res, next) => {
    Post.find().then((documents) => {
        res.status(200).json({
            message: 'Posts fetched successfully!',
            posts: documents.map(document => {
                const { title, content } = document;
                return { title, content, id: document._id }
            })
        });
    });
}

const getPostsList = () => {
    const promise = new Promise((resolve, reject) => {
        Post.find().then((documents) => {
            resolve(documents.map(document => {
                const { title, content } = document;
                return { title, content, id: document._id }
            }));
        });
    });
    return promise;
}

exports.createPost = (req, res, next) => {
    const { title, content } = req.body;
    const post = new Post({
        title, content
    })
    post.save()
    .then(() => getPostsList())
    .then(documents => {
        res.status(201).json({
            message: `Post ${post.title} created successfully`,
            posts: documents
        });
    });
}

exports.deletePost = (req, res, next) => {
    Post.deleteOne({ _id: req.params.id})
    .then(() => getPostsList())
    .then(documents => {
        res.status(200).json({
            message: `Post deleted successfully`,
            posts: documents
        });
    });
}

exports.updatePost = (req, res, next) => {
    Post.updateOne({ _id: req.params.id }, req.body)
    .then(() => getPostsList())
    .then(documents => {
        res.status(200).json({
            message: `Post updated successfully`,
            posts: documents
        })
    })
}