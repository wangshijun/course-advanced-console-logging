# 浏览器 Console 高级技巧实战

## 课程介绍

`console` 是开发 `javascript` 应用时最常用的调试工具，也是大多前端工程师入门时学会的第 1 个 `API`。除 `console.log` 之外，现代浏览器还为我们提供了很多打印日志的函数，来简化开发中的各种日志输出需求，比如日志分级、格式化、分组、计时、计数等。花 15 分钟学完本课程，你就能把这些工具函数添加到你的工具箱，让自己成为更高效的工程师。

## 内容目录

### 1. 日志级别及其语义化方法

类似于后端开发的日志分级，`console` 对象也提供了不同日志级别输出的各种函数，使用这些函数，能够让你打印的日志简洁，更容易阅读过滤。

### 2. 使用 `console.log` 高级参数

只用 `console.log` 输出简单的字符串？学完这节课你可以做的更多：输出多个参数，输出类似于 C 语言风格的模板变量替换，甚至输出有样式的日志。

### 3. 使用 `console.group*` 做日志分组和嵌套

调试时需要输出大量的日志？但是日志扫读确很费劲？`console.group` 能帮你更好的组织日志，实现页面里面才有的分组、折叠，甚至是嵌套。

### 4. 警惕 `console.assert` 的便利

`console.assert` 让你不用 `if` 就能判断条件并输出日志，很有用，但行为和你所熟知的其他语言并不完全相同，什么时候该用？什么时候不该用？

### 5. 使用 `console.count` 计数

抛弃临时变量计数法，因为 `console.count` 就能帮你统计感兴趣事件发生的次数。

### 6. 使用 `consome.time*` 计时

在性能诊断和优化时你还在自定义各种 `timer` 和临时变量？结合 `console.time` 和 `console.timeEnd` 为任何 `javascript` 操作计时，这样就不会出现临时变量污染代码库了。

### 7. 使用 `console.table` 输出结构化数据

`console.table` 能够让结构化的数据输出可读性更高，不仅支持对象和数组，并且允许你自定义输出的列。

### 8. 使用 `console.trace` 调试复杂代码

`console.trace` 能够让你在不终止代码执行的情况下知道代码的执行路径，即打印出代码的调用栈，这点在调试复杂代码时非常有用。

## 源码链接

仓库地址：[wangshijun/course-advanced-console-logging](https://github.com/wangshijun/course-advanced-console-logging)

运行方法（确保系统中安装了 [gulp 命令行工具](https://gulpjs.com/)）：

```shell
git clone https://github.com/wangshijun/course-advanced-console-logging
cd course-advanced-console-logging
gulp serve
```

如果想运行某节课的源码，直接修改 `app/index.html` 第 53 行的脚本引用地址，对应的代码如下：

1. [日志级别及其语义化方法](https://github.com/wangshijun/course-advanced-console-logging/commit/61acb0fbd40da1eb4d3a654c24912ee7fb5f90ac)
1. [使用 `console.log` 高级参数](https://github.com/wangshijun/course-advanced-console-logging/commit/0f6b7e52bff5f30e27d2516caf359679d160df2e)
1. [使用 `console.group*` 做日志分组和嵌套](https://github.com/wangshijun/course-advanced-console-logging/commit/31b0228817e106eea2f26119af96066c44296810)
1. [警惕 `console.assert` 的便利](https://github.com/wangshijun/course-advanced-console-logging/commit/9ff39b6f89b65ce97f755edcd9d46ba84b51e086)
1. [使用 `console.count` 计数](https://github.com/wangshijun/course-advanced-console-logging/commit/d31bdc334b29f6a9d08761dcf8afb62d94da14fc)
1. [使用 `consome.time*` 计时](https://github.com/wangshijun/course-advanced-console-logging/commit/9742501d8261649670c1ff24a9b2b75c83ae90ca)
1. [使用 `console.table` 输出结构化数据](https://github.com/wangshijun/course-advanced-console-logging/commit/ae01045e45887781f5e3c5118b98caffb7f52ed8)
1. [使用 `console.trace` 调试复杂代码](https://github.com/wangshijun/course-advanced-console-logging/commit/508bd9e9a1618f49f265c9167ef5b3edd1b0eb41)

## 适用人群

* [required]具备前端基础知识，CSS、HTML、JS；
* [optional]用 `Chrome` 调试代码，但调试时只用 `console.log` 的同学；
* [optional]期望不断打磨自己的调试技能，让自己变得更值钱；

## 运行环境

* Chrome v61
* Node.js v8.6

## 参考资料

* [Chrome Console API Reference](https://developers.google.com/web/tools/chrome-devtools/console/console-reference)
