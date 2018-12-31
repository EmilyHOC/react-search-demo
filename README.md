####这是一个通过模糊匹配搜索github用户的demo
![展示](./1.gif)

知识点：利用axios发送ajax请求
地址是：https://api.github.com/search/users?q=

state里面有四种状态：firstView首屏显示，Loading加载以及请求后的页面和失败状态
通过条件判断选择需要渲染的组件