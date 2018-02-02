import './index.less';
import React from 'react';
import PropTypes from 'prop-types';

class AutoComplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            close: false //是否需要出现close按钮
        };
    }

    render() {
        //list还是使用reactnode比较实际，
        //参考了antd的之后，感觉使用可以使用两个数据源，一个是自定义一个是默认的
        //children，datasource（使用默认展示）
        const {
            dataSource,
            children,
            placeholder,
            onChange,
            onSearch,
            onSelect
        } = this.props;
        return (
            <div className="autocomplete-wrapper">
                <div className="input-wrapper">
                    <i className="search icon" />
                    <input
                        type="text"
                        className="search-input"
                        placeholder={placeholder}
                    />
                    <i className="close icon" />
                </div>
                <div className="result-list">{list}</div>
            </div>
        );
    }
}

AutoComplete.PropTypes = {
    children: PropTypes.node,
    dataSource: PropTypes.array,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onSearch: PropTypes.func,
    onSelect: PorpTypes.func
};

export default AutoComplete;
