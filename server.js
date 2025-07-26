import express from 'express';
const app = express();
const port = 8000;
import posts from './routes/posts.js';
import logger from './middleware/logger.js'

// exporting middleware
app.use(logger)

// body parserer middleware
app.use(express.json());
app.use(express.urlencoded ({extended: false}));

// express static middleware
app.use(express.static('public'));

// routes
app.use('/api/posts', posts);

app.listen(port, () =>{
    console.log(`listening on http://localhost:${port}`);
})