// import the axios configuration file in order to use it
import axios from './axios'

// .then() is a way for us to make code execute only after receiving a response
// axios provides the 'response' object which contains the data we requested.
// axios.get('/articles').then((response) => console.log(response))
// this response object can be destrcutured to { data } and that what we would usually work with
axios.get('/articles').then(({ data }) => console.log(data.data))

// POST
// takes 2 argumants, url to post to and object of data to post
/*
axios.post('/articles', {
    title: 'My First Article',
    content: 'This is great',
    tags: ['article', 'coding']
})
*/
 