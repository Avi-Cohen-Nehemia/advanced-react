// import the axios configuration file in order to use it
import axios from './axios'

/* Promise is an object we recieve after making a request and while waiting for a response fron the API
.then() is a way for us to write and execute code only after receiving a response from the API
axios .then() provides the 'response' object which contains all the data sent by the API.
for example: axios.get('/articles').then((response) => console.log(response))
this response object can be destrcutured to { data } and that what we would usually work with
.catch() is a way for us to handle errors in case out request failed. */
axios.get('/articles')
    .then(({ data }) => console.log(data.data))
    .catch((error) => {
        console.log(error.response);
    });
    

// POST
// takes 2 argumants, url to post to and object of data to post
/*
axios.post('/articles', {
    title: 'My First Article',
    content: 'This is great',
    tags: ['article', 'coding']
})
*/

// POST exercise
// Create a new article using axios and then console.log() its ID
// axios.post('/articles', {
//     title: 'My Second Article',
//     content: 'This is nice',
//     tags: ['second', 'post']
// }).then(({ data }) => {
//     console.log(data.data.id)
// }).catch(() => {
//     console.log('Oops... Somthing went wrong!')
// })

// GET exercise
// Fetch one of your articles from the API and console.log() it
// axios.get('/articles/2')
//     .then(({ data }) => console.log(data.data))
//     .catch(() => console.log('Oops... Somthing went wrong!'))

// PUT exercise
// Add a new tag to one of your articles and console.log() the tags array from the response:
// axios.patch('/articles/1', {
//     tags: ['article', 'coding', 'patch']
// })
// .then(({ data }) => console.log(data.data.tags))
// .catch(() => console.log('Oops... Somthing went wrong!'))

// DELETE exercise
// Delete an article and console.log() "Deleted" once you get back a response
// axios.delete('/articles/1')
// .then(() => console.log('Deleted!'))
// .catch(() => console.log('Oops... Somthing went wrong!'))

// DELETE exercise
// Delete an article and console.log() "Deleted" once you get back a response
// axios.delete('/articles/1')
// .then(() => console.log('Deleted!'))
// .catch(() => console.log('Oops... Somthing went wrong!'))

// POST comment exercise
// Delete an article and console.log() "Deleted" once you get back a response
// axios.post('/articles/2/comments', {
//     email: 'haha@blah.com',
//     comment: 'This is rubbish!!'
// })
// .then(({ data }) => console.log(data.data))
// .catch(() => console.log('Oops... Somthing went wrong!'))

// GET all comments from a specific article exercise
// Delete an article and console.log() "Deleted" once you get back a response
axios.get('/articles/2/comments')
.then(({ data }) => data.data.map((comment) => console.log(comment.comment)))
.catch(() => console.log('Oops... Somthing went wrong!'))
