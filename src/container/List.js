import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Todos from '../components/Todos';
import { toggleTodo, deleteTodo, VisibilityFilters } from '../actions'

const Content = (props) => {
    const { data, handleToggle, handleDelete } = props;
    const isEmpty = !data.length;
    let renderDom;

    if(isEmpty) {
        renderDom = <div>{'No Matched Data'}</div>;
    }else {
        renderDom = <Todos 
                        data={data} 
                        onToggle={handleToggle}
                        onDelete={handleDelete}
                    />;
    }
    return(
        <div className="container-list">
            {renderDom}
        </div>
    )
}

Content.propType = {
    data: PropTypes.array.isRequired,
    handleToggle: PropTypes.func,
    handleDelete: PropTypes.func
}

Content.defaultProps = {
    data: [],
    handleToggle:  () => {},
    handleDelete: () => {}
}

const getVisibileTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_COMPLETED:
             return todos.filter(todo => {
                 return todo.completed;
             });
        case VisibilityFilters.SHOW_UNDO:
             return todos.filter(todo => {
                 return !todo.completed;
             });
        default:
            return todos;
    }
}

const mapStateToProps = state => ({
    data: getVisibileTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = distpatch => ({
    handleToggle: (id) => distpatch(toggleTodo(id)),
    handleDelete: (id) => distpatch(deleteTodo(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Content);