import React from 'react';
import {
    HashRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';
import Nav from '../components/nav/';

import { routes } from './routes.js';


/**
 * bundle.js:418 Uncaught Error: A <Router> may have only one child element
 */
const Routers = () => {
    return (
        <Router>
            <React.Fragment>
            <Nav />
            {routes.map((opt, i) => {
                const key = Object.keys(opt)[0];
                console.log(key,opt[key]);
                return <Route exact key={i} path={key} component={opt[key]} />;
            })}
            </React.Fragment>
        </Router>
    );
};

/**
 * 1.不共用router，history会不一样吗？会导致创建了两个history吗？
 * 2.route里的match匹配到的,hash的这种怎么匹配。它也是去读取原来component里的props，并不是页面上看见的
 * 但是现在他不会去渲染component,是因为const定义的不会提升，导致component是undefined了。
 * 3.现在又有一个问题了，它不会去更新。去掉Switch之后它点击之后会变化了，但是第一个它一直在
 * 4.为什么会出现这种情况呢？这时候它的默认是哪个？是第一个？那点击其他，渲染的时候，第一个不会unmount吗？
 * 加了个exact 就好了？？唯一匹配？？
 * 突然觉得好厉害，居然可以渲染两个component在页面上（意思就是触发了两个Route的渲染）
 */

export default Routers;
