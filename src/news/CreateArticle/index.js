import React, { Component } from 'react'
import axios from './../../ajax/axios'

class CreateArticle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            content: '',
            tags: ''
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
        axios.post('/articles', {
            title: this.state.title,
            content: this.state.content,
            tags: this.state.tags.split(', ')
        })
        .then(({ data }) => {
            console.log(data.data)
            this.setState({
                title: '',
                content: '',
                tags: ''
            })
        })
        .catch((error) => console.log(error.response))
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='form-row'>
                    <div className='form-group col-md-4'>
                        <label forhtml={'Title'}>{'Title'}</label>
                        <input
                            id={'Title'}
                            value={this.state.title}
                            onChange={(e) => this.handleChange(e, 'title')}
                            className='form-control'
                            type='text'
                        />
                    </div>
                </div>
                <div className='form-row'>
                    <div className='form-group col-md-4'>
                        <label forhtml={'Content'}>{'Content'}</label>
                        <input
                            id={'Content'}
                            value={this.state.content}
                            onChange={(e) => this.handleChange(e, 'content')}
                            className='form-control'
                            type='text'
                        />
                    </div>
                </div>
                <div className='form-row'>
                    <div className='form-group col-md-4'>
                        <label forhtml={'Tags'}>{'Tags'}</label>
                        <input
                            id={'Tags'}
                            value={this.state.tags}
                            onChange={(e) => this.handleChange(e, 'tags')}
                            className='form-control'
                            type='text'
                        />
                    </div>
                </div>
                <button>{'Submit'}</button>
            </form>
        )
    }
}

export default CreateArticle
