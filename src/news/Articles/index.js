import React, { Component } from 'react'
import axios from './../../ajax/axios'

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
            <ul className='list-group'>
                {this.state.articles.map((article, index) => (
                    <li
                        key={index}
                        className='list-group-item'
                    >
                        <h3>{article.title}</h3>
                    </li>
                ))}
            </ul>
        )
    }
}

export default Articles
