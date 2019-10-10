# trade-admin-vue
1.基于vue-cli3创建项目
2.基于axios封装请求 3.基于eslint进行代码检查
4.基于normalize.css进行css样式初始化
5.基于stylelint对css进行代码检查
6.vue-router history模式封装路由
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 增加commit之前的钩子
```
yarn add lint-staged
```
在package.json中增加
gitHooks git钩子
"gitHooks": {
  "pre-commit": "lint-staged"
},
要执行的服务
"lint-staged": {
  "*.{js,vue}": [
    "vue-cli-service lint",
    "git add"
  ]
},
