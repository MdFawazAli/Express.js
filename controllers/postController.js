let posts = [
    { id: 1, title: 'one' },
    { id: 2, title: 'two' },
    { id: 3, title: 'three' }
]

// Get Posts & query manipulation 
export const getPosts = (req, res, next) => {
    let limit = parseInt(req.query.limit)
    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit))
    }
    res.status(200).json(posts)
}

// To get one post
export const getPost = (req, res, next) => {
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
}

// Create a new post by .POST method
export const Postmethod = (req, res, next) => {
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
}

// update a post using .put method
export const Putmethod = (req, res, next) => {
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
}

// Delete a post using .delete method
export const Deletemethod = (req, res, next) => {
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
}

