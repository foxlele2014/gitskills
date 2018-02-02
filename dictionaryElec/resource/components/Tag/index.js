import './index.less';
import React from 'react';
import PropTypes from 'prop-types';

class Tag extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { color, text, onClick } = this.props;
        return (
            <span
                className="tag-wrapper"
                style={{ background: color }}
                onClick={onClick}
            >
                {text}
            </span>
        );
    }
}

Tag.PropTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
};

export default Tag;
