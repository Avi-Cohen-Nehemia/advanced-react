import React, { Component } from 'react'
import axios from './../../ajax/axios'
import Comments from './../Comments'

class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            article: {}
        }
    }

    componentDidMount() {
        const { id } = this.props
        axios.get(`articles/${id}`).then(({ data }) => {
            this.setState({ article: data.data })
        })
    }

    render() {
        return (
            <>
                <h2>{ this.state.article.title }</h2>
                <p>{ this.state.article.content }</p>
                <Comments id={ this.props.id }/>
            </>
        )
    }
}

export default Article
