import React from 'react';
import { PropTypes } from 'prop-types';
import TodoList from './views/List';
require('./style.css');

const Todos = (props) => {
    const { data, onToggle, onDelete } = props;

    return (
        <div className="component-todos">
            <TodoList 
                todos={data} 
                onToggle={onToggle}
                onDelete={onDelete}
            />
        </div>
    )
}

Todos.propType = {
    data: PropTypes.array.isRequired,
    onToggle: PropTypes.func,
    onDelete: PropTypes.func
}

Todos.defaultProps = {
    data: [],
    onToggle: () => {},
    onDelete: () => {}
}

export default Todos;