import React from 'react';
import { PropTypes } from 'prop-types';

const Button = (props) => {
    const { onSubmit, value } = props;

    const handleClick = (event) => {
        event.preventDefault();
        const val = value.trim();
        val && onSubmit(value)
    } 

    return (
        <button type="submit" className="button" onClick={handleClick}>Subimit</button>
    )
}

Button.propType = {
    onSubmit: PropTypes.func,
    value: PropTypes.string.isRequired
}

Button.defaultProps = {
    onSubmit: () => {},
    value: ''
}

export default Button;