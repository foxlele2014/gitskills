# 说明

记录 package.json 里用到的 package，使用它有什么作用。

* babel-preset-react，babel 的 option 的 preset，用来解析 react
* babel-preset-env ，用来解析 es6
* [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)只加载引用的内容的代码，（antd）
* babel-plugin-transform-runtime ，可以引入 babel-polyfill，然后解析一些如 Object.assign，Array.prototype.find 之类的，（用到的才会引用），babel-runtime 的自动化版本
* babel-polyfill，全局有效
* babel-runtime,这三个有点类似，按需引入（手动）
* babel-plugin-syntax-dynamic-import ，可以使用 import()
* babel-plugin-preval ，用来预编译，编译时执行代码
* [babel-plugin-transform-object-rest-spread](https://www.npmjs.com/package/babel-plugin-transform-object-rest-spread)
* cross-env,兼容各平台（windows、Linux 等 )NODE_ENV=development ,Run scripts that set and use environment variables across platforms
* cross-spawn,A cross platform solution to node's spawn and spawnSync.
* [identity-obj-proxy](https://github.com/keyanzhang/identity-obj-proxy)CSS Modules 等
* fs-extra
* ansi-styles
* majo
* ejs

```html
    <span class="icon-home"></span>
    <span class="icon-book"></span>
    <span class="icon-volume-medium"></span>
```

```css
.icon-home:before {
    content: '\e900';
}
.icon-book:before {
  content: "\e91f";
}
.icon-volume-medium:before {
  content: "\ea27";
}
```
