import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Link from './views/Link';
require('./style.css');

class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeItem: ''
        }

        this.handleChangeActive = this.handleChangeActive.bind(this);
    }

    componentDidMount() {
        const { activeItem, filters } = this.props;
        const acItem = activeItem ? activeItem : filters[0].value;

        this.setState({
            activeItem: acItem
        })
    }

    handleChangeActive(item) {
        this.setState({
            activeItem: item
        })
        this.props.onChange(item);
    }

    render() {
        const { activeItem } = this.state;

        return (
            <div className="component-filter">
                <div className="filter">
                    {
                        this.props.filters.map((item, index) => {
                            return(
                                <Link 
                                    key={index}
                                    filter={item}
                                    active={activeItem === item.value}
                                    onChange={this.handleChangeActive}
                                >
                                    {item.text}
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

Filter.propType = {
    filters: PropTypes.array.isRequired,
    activeItem: PropTypes.string,
    onChange: PropTypes.func
}

Filter.defaultProps = {
    filters: [],
    onChange: () => {}
}

export default Filter;