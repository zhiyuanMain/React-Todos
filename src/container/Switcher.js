import React from 'react';
import { connect } from 'react-redux';
import Filter from '../components/Filter';
import { VisibilityFilters, setVisibilityFilter } from '../actions';

const filtersArr = [];
for(let key in VisibilityFilters) {
    const filter = VisibilityFilters[key];
    const filterToArr = filter.split('_');
    filtersArr.push({
        text: filterToArr[filterToArr.length - 1].toLowerCase(),
        value: filter
    });
}

const Footer = (props) => {
    const { handleFilter, activeItem } = props;
    return (
        <div className="container-switch">
            <Filter 
                activeItem={activeItem}
                filters={filtersArr} 
                onChange={handleFilter}
            />
        </div>
    )
}

const mapStateToProps = (state) => ({
    activeItem: state.visibilityFilter
});

const mapDispatchToProps = distpatch => ({
    handleFilter: (filter) => distpatch(setVisibilityFilter(filter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer);