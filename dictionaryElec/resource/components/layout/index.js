/*
* @Author: limin
* @Date:   2017-12-29 18:24:27
* @Last Modified by:   limin
* @Last Modified time: 2018-01-23 14:40:06
*/
import '@assets/less/common.less';
import React from 'react';
import Routers from '../../route/';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props;
        return (
            <div className="layout-wrapper">
                <Routers />
            </div>
        );
    }
}
