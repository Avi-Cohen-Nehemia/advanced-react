import axios from 'axios'

export default axios.create({
    baseURL: 'https://restful.training/api/blog',
    headers: {
        // make sure we get JSON back
        Accept: "application/json",

        // use your own key
        Authorization: "Bearer 5|tATpSrYXAaJaqmP8wDpVQ49cKLKswXXgo0NLutqi",
    },
})

// In the axios congiguration file we pass axios the information it needs
// in order to make http requests like the base URL and headers
