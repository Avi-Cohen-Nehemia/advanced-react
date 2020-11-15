import React, { Component } from 'react'
import axios from './../../ajax/axios'

class Comments extends Component {
    constructor(props) {
        super(props)

        this.state = {
            comments: [],
        }
    }

    componentDidMount() {
        const { id } = this.props

        axios.get(`articles/${id}/comments`).then(({data}) => {
            this.setState({comments: data.data})
        })
    }

    render() {
        const { comments } = this.state

        return (
            <>
                <h3>{'Comments'}</h3>
                { comments.length > 0 ?
                    <ul className='list-group'>
                        {comments.map((comment, index) => (
                            <li
                                key={index}
                                className='list-group-item'
                            >
                                <h4>{comment.email}</h4>
                                <p>{comment.comment}</p>
                            </li>
                        )) }
                    </ul>
                : <p>{'No Comments left on this article yet'}</p> }
            </>
        )
    }
}

export default Comments
