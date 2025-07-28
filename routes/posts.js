import express from "express";
import {
    getPost,
    getPosts,
    Postmethod,
    Putmethod,
    Deletemethod
} from '../controllers/postController.js'

const router = express()

// To get all the posts and set limit of posts
router.get('/', getPosts )

// To get only one post 
router.get('/:id', getPost )

// Create a new post by .POST method
router.post('/', Postmethod )

// update a post using .put method
router.put('/:id', Putmethod )

// Delete a post using .delete method
router.delete('/:id', Deletemethod)

export default router;