import express from "express";
const router = express()

let posts = [
    { id: 1, title: 'one' },
    { id: 2, title: 'two' },
    { id: 3, title: 'three' }
]

// To get all the posts and set limit of posts
router.get('/', (req, res, next) => {
    let limit = parseInt(req.query.limit)
    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit))
    }
    res.status(200).json(posts)
})

// To get only one post 
router.get('/:id', (req, res, next) => {
    let id = parseInt(req.params.id);
    let post = posts.find((post) => {
        return post.id === id;
    })
    if (!post) {
        const error = new Error(`${id} is not found in the posts`);
        error.status = 404;
        return next(error)
    }
    res.status(200).json(post);
})

// Create a new post by .POST method
router.post('/', (req, res, next) => {
    const newpost = {
        id: posts.length + 1,
        title: req.body.title
    }
    if (!newpost.title) {
        const error = new Error(`Pls include the title`);
        error.status = 404;
        return next(error)
    }
    posts.push(newpost)
    res.status(201).json(posts)
})

// update a post using .put method
router.put('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => {
        return post.id === id;
    })
    if (!post) {
        const error = new Error(`${id} is not found in the posts`);
        error.status = 404;
        return next(error)
    }
    post.title = req.body.title
    res.status(200).json(posts)
})

// Delete a post using .delete method
router.delete('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => {
        return post.id === id;
    })
    if (!post) {
        const error = new Error(`${id} is not found in the posts`);
        error.status = 404;
        return next(error)
    } else {
        res.status(200).json(posts.filter((post) => {
            return post.id != id;
        }))
    }
})

export default router;