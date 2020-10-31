import React, { Component } from "react";
import Password from './Password';

class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            password: '',
            confirm: '',
        }

        this.handlePassword = this.handlePassword.bind(this)
        this.handleConfirm = this.handleConfirm.bind(this)
    }

    handlePassword(e) {
        let value = e.currentTarget.value;
        this.setState({ password: value })
    }

    handleConfirm(e) {
        let value = e.currentTarget.value;
        this.setState({ confirm: value })
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
                    handleChange={ (e) => this.handlePassword(e) }
                />
                <Password
                    label={ 'Confirm Password' }
                    color={ color }
                    value={ confirm }
                    handleChange={ (e) => this.handleConfirm(e) }
                />
            </form>
        );
    }
}

export default SignUp;