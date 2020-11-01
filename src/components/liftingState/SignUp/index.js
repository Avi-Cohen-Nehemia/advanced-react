import React, { Component } from "react";
import Password from './Password';

class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            password: '',
            confirm: '',
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e, input) {
        let change = {}
        change[input] = e.currentTarget.value;
        this.setState(change)
    }

    render() {
        const { minimumLength } = this.props;
        const { password, confirm } = this.state;
        let color = (password === confirm) && (password.length >= minimumLength) ? 'green' : 'red'

        return (
            <form>
                <Password
                    label={ 'Password' }
                    color={ color }
                    value={ password }
                    handleChange={ (e) => this.handleChange(e, 'password') }
                />
                <Password
                    label={ 'Confirm Password' }
                    color={ color }
                    value={ confirm }
                    handleChange={ (e) => this.handleChange(e, 'confirm') }
                />
            </form>
        );
    }
}

export default SignUp;