import React from 'react';
import { PropTypes } from 'prop-types';
import Item from './Item';

const TodoList = (props) => {
    const { todos, onToggle, onDelete } = props;

    return (
        <ul className="list">
            {
                todos.map(todo => {
                    return (
                        <Item 
                            key={todo.id}
                            id={todo.id}
                            completed={todo.completed}
                            text={todo.text}
                            onToggle={onToggle}
                            onDelete={onDelete}
                        />
                    )
                })
            }
        </ul>
    )
}

TodoList.propType = {
    todos: PropTypes.array.isRequired,
    onToggle: PropTypes.func,
    onDelete: PropTypes.func
}

TodoList.defaultProps = {
    todos: [],
    onToggle: () => {},
    onDelete: () => {}
}

export default TodoList;