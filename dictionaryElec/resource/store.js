/*
* @Author: limin
* @Date:   2017-12-29 18:25:18
* @Last Modified by:   limin
* @Last Modified time: 2017-12-29 18:26:43
*/

/**
 * 使用redux将各个页面的store组织成一个
 * 一个更大的state
    感也可以每个模块自己配置自己需要的，然后再export出来，再统一放到store里来管理
    感觉这个文件也可以不需要了。
    */
import { createStore } from 'redux';
import { model, reducers } from './route/routes.js';

let store;

store = createStore(reducers,model);

export default store;

/**
 * Warning: Failed prop type: The prop `store.subscribe` is marked as required in `Provider`, but its value is `undefined`.
    in Provider (created by App)
    in App
*/
