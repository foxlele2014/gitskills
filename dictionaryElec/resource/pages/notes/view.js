import React, { Components } from "react";
import { connect } from "react-redux";

class Notes extends Components {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="notes-wrapper">
                <div className="notes-list" />
                <div className="word-detail" />
            </div>
        );
    }
}

export default connect(({ notes }) => ({
    notes
}))(Notes);
