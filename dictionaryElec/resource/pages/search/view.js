import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { AutoComplete } from 'antd';
import * as actions from './actions';

const Option = AutoComplete.Option;

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {}

    searchWord() {}
    getNotes() {}
    getRelation() {}
    addToNotes() {}

    renderOptions(options) {
        return options.map((opt,i) => {
            return (
                <Option key={i}></Option>
            )
        })
    }

    render() {
        return (
            <div className="search-wrapper">
                <div className="search-header">
                    <AutoComplete />
                </div>
                <div className="search-content" />
                <div className="search-tools" />
            </div>
        );
    }
}

export default connect(({ search }) => ({
    search
}))(Search);
