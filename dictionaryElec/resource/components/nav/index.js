/*
* @Author: limin
* @Date:   2017-12-29 18:26:50
* @Last Modified by:   limin
* @Last Modified time: 2018-01-23 14:56:25
*/
/**
 * 导航
 */

import React from 'react';
import { HashRouter,Link } from 'react-router-dom';
//惊叹下，好多黑盒处理啊，例如这个react-router-dom 的BrowserRouter就已经集成了history
 // import { browserHistory } from 'react-router';
import nav from '../../config/navigation.js';


/**
 * https://stackoverflow.com/questions/36505404/how-to-use-react-router-with-electron
 * Failed to execute 'pushState' on 'History': A history state object with URL 'file:///topic' cannot be created in a document with origin 'null' and URL 'file:///Users/Documents/timeisgone/elec-project/resource/index.html'.
 * Generally speaking, you should use a <BrowserRouter> if you have a server that responds to requests and a <HashRouter> if you are using a static file server.
 */

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {};
    }
    renderChildren() {
        return nav.map((opt, i) => (
            <li key={i}>
                <Link to={opt.url} replace>{opt.name}</Link>
            </li>
        ));
    }
   
    render() {
        return (
            <HashRouter>
                <div>
                    <ul>
                        {this.renderChildren()}
                    </ul>
                </div>
            </HashRouter>
        );
    }
}
/**
 * li
 * Consider adding an error boundary to your tree to customize error handling behavior.
 * 找了好久的一个错误，是因为electron不支持browerhistory,然后就不打算用react-router-dom了。但是我
 * 没注意看，原来react-router是没有Link这个组件的。。。。导致一直说是undefined。。。。
 * 
 */

/**
 * link 的使用依赖router，他需要通过this.context.router来获取到history，里边有点击事件，会使用history.replae 或者history.push
 * 但是link是只做两件事，替换location,做history的存储操作
 * 还有一个NavLink，加了是否active的判断
 */

/**
 * Hash history cannot PUSH the same path; a new entry will not be added to the history stack
 *
 * 连续两次点击同一个url
 * https://github.com/ReactTraining/react-router/issues/4467
 */


