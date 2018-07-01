# vue-cli2.0

> Vue-Cli 2.0 Template

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

目录结构
=========

* src
``` bash
├── App.vue                   // APP入口文件
├── api                       // 接口调用工具
│   └── index.js
├── components                // 组件
├── router                    // 子路由
│   └── index.js
├── store                     // 状态
│   └── index.js
├── style                     // less 样式
│   ├── base                      // 基础
│   │   ├── _base.less                // 基础样式
│   │   ├── _color.less               // 颜色变量配置
│   │   ├── _mixin.less               // less 混合
│   │   └── _reset.less               // 重置默认样式
│   ├── less                      // 页面
│   │   └── _index.less               // 主页样式文件
│   └── style.less                // 主样式文件
├── utils                     // 常用工具
│   └── index.js
├── views                     // 页面组件
│   └── index.vue
├── App.vue                   // APP 入口文件
└── main.js                   // 项目配置文件
```

* static
``` bash
├── css                       // 第三方的样式
├── fonts                     // 字体图标
├── image                     // 图片
└── js                        // 第三方的JS文件，如 jquery
```