/**
 * 每个页面的路由自己配置，不在统一的文件里边修改增加。
 * 如在pages/index/index.js
 * 增加index.js 用来配置路由，
 * 这个可以连同路由，modal,reducers,component一起配置
 * 使用node的fs来读取文件，所以可以使用babel的预处理（在编译过程期间完成）
 */

import React from 'react';



//TODO 预处理 、读取
//把pages文件夹里的index引入
let pages = preval `
    const path  = require('path');
    module.exports = require('./getpages');
`;

console.log(pages);

const test = pages.map((opt,i) => {
    return require(`../pages/${opt}`);
})

console.log(test);//[{'/':{}}]
/**
  * key:value
    [{route:component}]
    太特么心塞了，= =该怎么处理这一块比较好呢
    好艰难啊
  */
  
 let routes = [],modal = {},reducers = [];
 test.forEach((opt,i) => {
    const key = Object.keys(opt.default)[0];
    routes.push({key:opt.default[key].component});
    console.log(opt.default[key].modal);
    modal[opt.default[key].modal.namespace] = opt.default[key].modal.state;
    reducers.push(opt.default[key].reducers);
 })

 console.log(routes,modal,reducers);

export default {
    routes,
    modal,
    reducers
 }

const Home = () => {
    return <div className="test">Home</div>;
};

const About = () => {
    return <div className="about">About</div>;
};

const Topic = () => {
    return <div className="topic">topic</div>;
};

// export const routes = [
//     {
//         '/': Home
//     },
//     {
//         '/about': About
//     },
//     {
//         '/topic': Topic
//     }
// ];

/**
 * store
 */

// export const model = {
//     home: {
//         test: '111'
//     },
//     about: {
//         test: '222'
//     },
//     topic: {
//         test: '333'
//     }
// };

/**
 * reducers
 */

// export const reducers = (state = model, action) => {
//     switch (action.type) {
//         case 'test':
//             return Object.assign({}, state, {
//                 visibilityFilter: action.filter
//             });
//         case 'ddd':
//             return Object.assign({}, state, {
//                 todos: [
//                     ...state.todos,
//                     {
//                         text: action.text,
//                         completed: false
//                     }
//                 ]
//             });
//         default:
//             return state;
//     }
// };
