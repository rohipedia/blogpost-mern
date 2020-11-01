const express = require('express');
const postController = require('../controllers/PostController');

const router = express.Router();

router.get('/api/posts', postController.getPosts);
router.post('/api/post', postController.createPost);
router.delete('/api/post/:id', postController.deletePost);
router.put('/api/post/:id', postController.updatePost);

module.exports = router;