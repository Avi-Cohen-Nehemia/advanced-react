import React from 'react';
import PropTypes from 'prop-types';

const Password = ({ color, label, handleChange, value }) => {
    return (
        <div className='form-row'>
            <div className='form-group col-md-4'>
                <label forhtml={ label }>{ label }</label>
                <input
                    id={ label }
                    value={ value }
                    onChange={ handleChange }
                    className='form-control'
                    type='password'
                    style={{ border: `solid 1px ${color}` }}
                />
            </div>
        </div>
    );

}

Password.defaultProps = {
    color: 'red',
    label: 'input',
    value: ''
}

Password.propTypes = {
    color: PropTypes.string,
    label: PropTypes.string.isRequired,
    handleChange: PropTypes.func,
    value: PropTypes.string
}

export default Password;
