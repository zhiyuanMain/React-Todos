import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import classnames from 'classnames';

class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            text: this.props.text,
            completed: this.props.completed
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange() {
        const { id, completed } = this.state;

        this.setState(prevState =>({
            completed: !prevState.completed
        }))
        this.props.onToggle(id, !completed);
    }

    handleDelete() {
        this.props.onDelete(this.props.id);
    }

    render() {
        const { id, text, completed } = this.state;

        const classNames = classnames({
            'item': true,
            'line-through': this.state.completed
        })

        return (
            <li className={classNames}>
                <input 
                    type="checkbox" 
                    className="checkbox"
                    defaultChecked={completed} 
                    onChange={this.handleChange} 
                    id={`${text}-${id}`}
                />
                <label className="text" htmlFor={`${text}-${id}`}>{text}</label>
                <span 
                    className="close" 
                    dangerouslySetInnerHTML={{ __html: '&times'}}
                    onClick={this.handleDelete}
                    title={`DELETE: ${text}`}
                ></span>
            </li>
        )
    }
}

Item.propType = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onToggle: PropTypes.func,
    onDelete: PropTypes.func
}

Item.defaultProps = {
    id: 0,
    text: '',
    completed: false,
    onToggle: () => {},
    onDelete: () => {}
}

export default Item;