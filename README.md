# em-underline
工具集

1. 为什么用？

 * 减少项目之间重复的代码
 * 公共方法抽离
 * 使用方便
 * 模块化，用哪个，引哪个
 * 易于维护

2. 怎么用？

  * 引用某一方法
 ```
 import isArray from 'em-underline/isArray';
 console.log(isArray([]));
 ```

  * 全部引用
 ```
 import _ from 'em-underline';
 console.log(_.isArray([]));
 ```

3. 安装

  * npm

  `npm install em-underline`

  * yarn

  `yarn add em-underline`
