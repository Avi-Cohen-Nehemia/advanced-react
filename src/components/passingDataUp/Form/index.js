import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)

        this.state={
            name: '',
            email: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e, input) {    
        let change = {}
        let value = e.currentTarget.value
        change[input] = value
        this.setState(change)
    }

    handleClick(e) {
        e.preventDefault()
        this.props.handleSubmit(this.state)
    }

    render() {
        return (
            <form onSubmit={ this.handleClick }>
                <div className='form-row'>
                    <div className='form-group col-md-4'>
                        <label forhtml={ 'Name' }>{ 'Name' }</label>
                        <input
                            id={ 'Name' }
                            value={ this.state.name }
                            onChange={ (e) => this.handleChange(e, 'name') }
                            className='form-control'
                            type='text'
                        />
                    </div>
                </div>
                <div className='form-row'>
                    <div className='form-group col-md-4'>
                        <label forhtml={ 'Email' }>{ 'Email' }</label>
                        <input
                            id={ 'Email' }
                            value={ this.state.email }
                            onChange={ (e) => this.handleChange(e, 'email') }
                            className='form-control'
                            type='email'
                        />
                    </div>
                </div>
                <button>{ 'Submit' }</button>
            </form>
        )
    }
}

export default Form
