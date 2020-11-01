import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props)

        this.state={ counter: 0 }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {    
        const { counter } = this.state 
        this.setState({ counter: counter + 1 })
        this.props.handleUpdate(counter + 1)
    }

    render() {
        return (
            <button onClick={ this.handleClick }>{this.state.counter}</button>
        )
    }
}

export default Button
