import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import classnames from 'classnames';
class Link extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if(this.props.active) return;
        this.props.onChange(this.props.filter.value)
    }


    render() {
        const isActive = this.props.active;
        const classNames = classnames({
            'link': true,
            'active': isActive
        })
        
        return <span className={classNames} onClick={this.handleClick}>{this.props.children}</span>
    }
}


Link.propType = {
    active: PropTypes.bool.isRequired,
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func
}

Link.defauleProps = {
    active: false,
    filter: '',
    onChange: ()=> {}
}

export default Link;