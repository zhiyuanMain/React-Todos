import React from 'react';
import { connect } from 'react-redux';
import Addtodo from '../components/Addtodo'
import { addTodo } from '../actions';

const Header = ({dispatch}) => {
    const handlerSumbit = (val) => {
        dispatch(addTodo(val));
    }

    return(
        <div className="container-add">
            <Addtodo onSubmit={handlerSumbit} />
        </div>
    )
}

export default connect()(Header);