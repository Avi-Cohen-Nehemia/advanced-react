import React, { Component } from 'react'
import axios from '../../ajax/axios'

class Articles extends Component {
    constructor(props) {
        super(props)

        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        axios.get('articles').then(({ data }) => {
            this.setState({ articles: data.data })
        })
    }

    render() {
        return (
            <ul>
                {this.state.articles.map(article => (
                    <li>{article.title}</li>
                ))}
            </ul>
        )
    }
}

export default Articles
