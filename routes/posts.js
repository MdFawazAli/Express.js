import express from "express";
const router = express()

let posts = [
    { id: 1, title: 'one' },
    { id: 2, title: 'two' },
    { id: 3, title: 'three' }
]

// To get all the posts and set limit of posts
router.get('/', (req, res) => {
    let limit = parseInt(req.query.limit)
    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit))
    }
    res.status(200).json(posts)
})

// To get only one post 
router.get('/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let post = posts.find((post) => {
        return post.id === id;
    })
    if (!post) {
        res.status(404).json({ msg: `${id} is not found in the posts` })
    }
    res.status(200).json(post);
})

// Create a new post by .POST method
router.post('/', (req, res) => {
    const newpost = {
        id: posts.length + 1,
        title: req.body.title
    }
    if (!newpost.title) {
        res.status(400).json({ msg: 'pls include the title' })
    }
    posts.push(newpost)
    res.status(201).json(posts)
})

// update a post using .put method
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => {
        return post.id === id;
    })
    if (!post) {
        res.status(404).json({ msg: `${id} is not found in the posts` })
    }
    post.title = req.body.title
    res.status(200).json(posts)
})

// Delete a post using .delete method
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => {
        return post.id === id;
    })
    if (!post) {
        res.status(404).json({ msg: `${id} is not found in the posts` })
    } else {
        res.status(200).json(posts.filter((post) => {
            return post.id != id;
        }))
    }
})

export default router;