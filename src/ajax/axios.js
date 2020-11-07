import axios from 'axios'

export default axios.create({
    baseURL: 'https://restful.training/api/blog',
    headers: {
        // make sure we get JSON back
        Accept: "application/json",

        // use your own key
        Authorization: "Bearer Muc2jAlBfTw37aHhnjEL1spke5WXwwyz9CK27U4iHfQ2noYSXznB3BL3nD5uke5gT9HMZmqE3MMsy3IB",
    },
})

// In the axios congiguration file we pass axios the information it needs
// in order to make http requests like the base URL and headers
