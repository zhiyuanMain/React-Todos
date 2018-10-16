import React from 'react';

const Input = (props) => {
    const { value, onChange, onSubmit } = props;

    const handleChange = (e) => {
        const val = e.target.value;
        onChange(val);
    }

    const handleKeyPress = (event) => {
        if (event.which !== 13) return;
        value && onSubmit(value);
    }

    return(
        <input 
            className="input" 
            type="text" 
            placeholder="please inout keywords" 
            value={props.value}
            onChange= {handleChange}
            onKeyPress={handleKeyPress}
        />
    )
}

export default Input;