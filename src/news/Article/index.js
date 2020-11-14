import React, { Component } from 'react'
import FourOhFour from '../../components/FourOhFour'
import axios from './../../ajax/axios'
import Comments from './../Comments'
import CreateComment from './../CreateComment'

class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            article: {},
            notFound: false
        }
    }

    componentDidMount() {
        const { id } = this.props
        axios.get(`articles/${id}`)
        .then(({ data }) => {
            this.setState({ article: data.data })
        })
        .catch(() => this.setState({notFound: true}))
    }

    render() {
        const { id } = this.props
        const { article, notFound } = this.state

        return (
            notFound ? <FourOhFour /> :
            <>
                <h2>{ article.title }</h2>
                <p>{ article.content }</p>
                <Comments id={ id }/>
                <CreateComment id={ id }/>
            </>
        )
    }
}

export default Article
