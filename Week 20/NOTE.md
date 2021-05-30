学习笔记

# 11-20周总结

## 重学CSS

#### CSS总体结构

+ @charset
+ @import
+ rules
  + @media
  + @page
  + rule

#### css- @规则

@charset ： www.w3.org/TR/css-synt… 声明CSS字符集
@import ：www.w3.org/TR/css-casc…  级联规则
@media ：www.w3.org/TR/css3-con… 有条件规则
@page ： www.w3.org/TR/css-page… 分页媒体（打印）
@counter-style ：www.w3.org/TR/css-coun… 列表前的数字或黑点
@keyframes ：www.w3.org/TR/css-anim… 动画
@fontface ：www.w3.org/TR/css-font… 字体
@supports ：www.w3.org/TR/css3-con… 兼容性不建议使用
@namespace ：www.w3.org/TR/css-name… 命名空间



#### css-rule

+ Selector
+ Declaration
  + key
  + value



#### 伪类

#### 链接/行为

+ ：any-link
+ `:link:vistied`
+ `:hover`
+ `:active`
+ `:focus`
+ `:target`

#### 树结构

+ `:empty`
+ `:nth-child()`
+ `:nth-last-child()`
+ `:first-child` `:last-child` `:only-child`

#### 逻辑

+ `:not`
+ `:where` `:has`

#### 伪元素

+ `::before`

+ `::after`

+ `::first-line`

+ `::first-letter`



#### 盒（Box）

盒模型

box-sizing:

- content-box   width(content)
- border-box: width(content+padding+border)

#### 正常流排版

+ 收集盒进行
+ 计算盒在行中的排布
+ 计算行的排布

#### IFC（Inline formatting context）

#### BFC（Block formatting context）

#### 正常流的行级排布

行模型：line-top、text-top、base-line、text-bottom、line-bottom

#### 正常流的块级排布

float与clear

margin折叠：只有BFC内会发生

#### 

#### Block

+ Block Container：里面有BFC的
+ Block-level Box： 外面有BFC的
+ Block Box = Block Container + Block-level Box 里外都有BFC的

#### Block Container

+ block
+ inline-block
+ table-cell
+ flex item
+ grid cell
+ table-caption

#### Block-level Box

Block level

+ display:block
+ display:flex
+ display:table
+ display:grid

Inline level

+ display:inline-block
+ display:inline-flex
+ display:inline-table
+ display:inline-grid

#### 设立BFC

+ floats 
+ absolutely positioned elements
+ block containers (such as inline-blocks, table-cells, and table-captions) that are not block boxes, 

​		• flex items

​		 • grid cell

​		 • ...... 

+ and block boxes with 'overflow' other than 'visible'

#### BFC合并

+ block box && overflow：visible
  + BFC合并与float
  + BFC合并与边距折叠

#### Flex排版

+ 收集盒进行
+ 计算盒在主轴方向的排布
+ 计算盒在交叉轴方向的排布

## 重学HTML

HTML的定义：XML与SGML

合法元素

+ Element：<tagname>...</tagname>
+ Text：text
+ Comment： <!-- comments-->
+ DocumentType:<!Doctype html>
+ ProcessingInstruction:<?a 1?>
+ CDATA:<![CDATA[]]>

字符引用

+ `&#161`;
+ `&amp`;
+ `&lt`;
+ `&gt`;
+ `&quot`;
+ 不要用&nbsp(no-break space)代替空格,&nbsp连接两个词会被认为是一个词。

浏览器API



### 事件API

 Event：冒泡与捕获



### CSSOM



### 标准化组织

+ khronos
  + WebGL
+ ECMA
  + ECMAScript
+ WHATWG
  + HTML
+ W3C
  + webaudio
  + CG/WG

## 组件化

#### 对象与组件

- 对象
  - Properites 属性
  - Method 方法
  - Inherit 继承关系
- 组件
  - Properites 属性
  - Method 方法
  - Inherit 继承关系
  - Attribute 特性
  - Config & State 配置和状态
  - Event 事件机制
  - Lifecycle 声明周期
  - Children 树形结构的必要性

## 工具链与发布系统

#### 工具

- jenkins
- git
- webpack
- travis
- babel
- eslint
- gulp
- create-react-app
- umi
- gitlab
- mocha
- http-server
- rollup
- vue-cli
- grunt
- mock
- husky
- prettier
- axios
- yeoman
- postman
- dva
- lerna
- jest
- yapi
- swagger
- wireshark
- git hooks

