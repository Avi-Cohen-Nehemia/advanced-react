// import the axios configuration file in order to use it
import axios from './axios'

axios.get('/articles')

// POST
// takes 2 argumants, url to post to and object of data to post
/*
axios.post('/articles', {
    title: 'My First Article',
    content: 'This is great',
    tags: ['article', 'coding']
})
*/