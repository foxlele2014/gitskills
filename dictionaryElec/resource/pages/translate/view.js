import React, { Component } from "react";
import { connect } from "react-redux";

class Translate extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="translate-wrapper">
                <div className="translate-source" />
                <div className="translate-target" />
            </div>
        );
    }
}

export default connect(({ translate }) => ({
    translate
}))(Translate);
