### 初始化
npm init --yes
tsc --init

### 安装loader plugin 以及必要的工具
这些都是我们开发环境要用的依赖，所以我们这里安装的时候使用的是 npm install module_name -D  即 npm install module_name --save-dev 写入devDependencies，devDependencies只是我们开发使用。  
还有一点就是为了避免不兼容出现的问题，我们这里指定了
npm i webpack@4 webpack-cli@3 webpack-dev-server -D
npm i html-webpack-plugin clean-webpack-plugin webpack-merge ts-loader typescript -D

### 编写Webpack的4个配置文件
webpack.base.config.js 是开发环境和生产打包环境公共的一些配置；
webpack.dev.config.js 是开发环境的配置，devtool 配置为 cheap-module-eval-source-map，不显示错误信息的列号，定位到源码，并且能够保证build\rebuild的速度。
webpack.pro.config.js 是生产环境配置

### 编写启动和打包命令
在 package.json 文件中，分别编写启动和打包命令。启动脚本采用的是 webpack-dev-server， 打包脚本采用的是 webpack。

### 程序启动
npm start

### 打包
npm run build

### 增加Vue
npm i vue@2     // 指定vue版本
npm i vue-loader vue-template-compiler css-loader style-loader -D   // 开发环境需要

npm i webpack-node-externals -D