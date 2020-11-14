import React, { Component } from 'react'
import FourOhFour from '../../components/FourOhFour'
import axios from './../../ajax/axios'
import Comments from './../Comments'

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
        return (
            this.state.notFound ? <FourOhFour /> :
            <>
                <h2>{ this.state.article.title }</h2>
                <p>{ this.state.article.content }</p>
                <Comments id={ this.props.id }/>
            </>
        )
    }
}

export default Article
