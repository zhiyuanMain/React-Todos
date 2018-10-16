import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Input from './views/Input';
import Button from './views/Button';
import './style.css'

class Addtodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value,
            onSubmit: props.onSubmit
        }

        this.changeValue = this.changeValue.bind(this);
        this.submitValue = this.submitValue.bind(this);
    }

    changeValue(val) {
        this.setState({
            value: val
        })
    }

    submitValue(val) {
        this.props.onSubmit(val);
        this.setState({
            value: ''
        })
    }

    render() {
        return (
            <div className="component-addtodo">
                <Input value={this.state.value} onChange={this.changeValue} onSubmit={this.submitValue} /> 
                <Button value={this.state.value} onSubmit={this.submitValue} />
            </div>
        )
    }
}

Addtodo.propType = {
    value: PropTypes.string,
    onSubmit: PropTypes.func
}

Addtodo.defaultProps = {
    onSubmit: () => {},
    value: ''
}

export default Addtodo;