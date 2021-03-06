import React, { Component } from 'react'
import axios from './../../ajax/axios'

class Comments extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            comment: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e, input) {
        let change = {}
        let value = e.currentTarget.value
        change[input] = value
        this.setState(change)
    }

    handleSubmit(e) {
        e.preventDefault()
        
        const { id } = this.props
        const { email, comment } = this.state

        let success = () => {
            this.setState({
                email: '',
                comment: '',
            })
        }

        axios.post(`articles/${id}/comments`, {
            email: email,
            comment: comment,
        }).then(success)
        .catch((error) => console.log(error.response))
    }

    render() {
        const { email, comment } = this.state

        return (
            <form onSubmit={this.handleSubmit}>
                <div className='form-row'>
                    <div className='form-group col-md-4'>
                        <label forhtml={'Email'}>{'Email'}</label>
                        <input
                            id={'Email'}
                            value={email}
                            onChange={(e) => this.handleChange(e, 'email')}
                            className='form-control'
                            type='email'
                        />
                    </div>
                </div>
                <div className='form-row'>
                    <div className='form-group col-md-4'>
                        <label forhtml={'Comment'}>{'Comment'}</label>
                        <input
                            id={'Comment'}
                            value={comment}
                            onChange={(e) => this.handleChange(e, 'comment')}
                            className='form-control'
                            type='text'
                        />
                    </div>
                </div>
                <button className='btn btn-primary'>{'Add Comment'}</button>
            </form>
        )
    }
}

export default Comments
