import React from "react";
import PropTypes from 'prop-types';

const Square = ({ color, selected, handleClick }) => {
    return (
        <div
            onClick={ handleClick }
            style={{ 
                height: "200px",
                width: "200px",
                backgroundColor: selected ? 'green' : color
            }}>
        </div>
    );

}

Square.defaultProps = {
    color: "red",
    selected: false,
}

Square.propTypes = {
    color: PropTypes.string,
    selected: PropTypes.bool,
    handleClick: PropTypes.func
}

export default Square;