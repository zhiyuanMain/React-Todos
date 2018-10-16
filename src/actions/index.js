/**
 * action类型
 */
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/**
 * 其他常量
 */
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_UNDO: 'SHOW_UNDO'
};

/**
 * action创建函数
 */
let nextTodoIndex = require('../mocks/todo.json').length;
export function addTodo(text) {
    return  {
        type: ADD_TODO,
        id: nextTodoIndex++,
        text
    }
}

export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id
    }
}

export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        id
    }
}

export function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}