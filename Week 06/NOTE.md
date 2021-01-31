学习笔记

## 1 语言按语法分类
### 1.1 非形式语言
  + 中文、英文
### 1.2 形式语言（乔姆斯基谱系）
  + 0 型 无限制文法
  + 1型 上下文相关文法
  + 2型 上下文无关文法
  + 3型 正则文法
## 2 BNF范式（Backus–Naur form）

  + 用尖括号括起来的名称来表示语法结构名
  + 语法结构分成基础结构和需要用其他语法结构定义的复合结构
      + 基础结构称终结符
      + 复合结构称非终结符
+ 引号和中间的字符表示终结符
+ 可以有括号
+ *表示重复多次
+ ｜表示或
+ +表示至少一次

```
<MultiplicativeExpression>::=<Number>|<
```



## 3 语言按用途分类

+ 形式语言—用途
  + 数据描述语言
  + 编程语言
+ 形式语言—表达方式
  + 声明式语言
  + 命令型语言

## 4 图灵完备性

+ 命令式——图灵机
  + goto
  + if 和while
+ 声明式——lambda
  + 递归

## 5  动态与静态

+ 动态：
  + 在用户的设备/在线服务器上
  + 产品实际运行时
  + Runtime
+ 静态：
  + 在程序员的设备上
  + 产品开发时
  + Compiletime

## 6 类型系统

+ 动态类型系统与静态类型系统
+ 强类型与弱类型
  + String+Number
  + String==Boolean
+ 复合类型
  + 结构体
  + 函数签名
+ 子类型
+ 泛型
  + 逆变/协变

## 7 一般命令式编程语言

1. Atom：Identifier、Literal
2. Expression：Atom、Operator、Punctuator
3. Statement：Expression、Keyword、Punctuator
4. Structure：Function、Class、Process、Namespace
5. Program：Program、Module、Package、Library



## 参考名词：

- [乔姆斯基谱系](https://zh.wikipedia.org/wiki/乔姆斯基谱系)：是计算机科学中刻画形式文法表达能力的一个分类谱系，是由诺姆·乔姆斯基于 1956 年提出的。它包括四个层次：
  - 0- 型文法（无限制文法或短语结构文法）包括所有的文法。
  - 1- 型文法（上下文相关文法）生成上下文相关语言。
  - 2- 型文法（上下文无关文法）生成上下文无关语言。
  - 3- 型文法（正规文法）生成正则语言。
- [巴科斯诺尔范式](https://zh.wikipedia.org/wiki/巴科斯范式)：即巴科斯范式（英语：Backus Normal Form，缩写为 BNF）是一种用于表示上下文无关文法的语言，上下文无关文法描述了一类形式语言。它是由约翰·巴科斯（John Backus）和彼得·诺尔（Peter Naur）首先引入的用来描述计算机语言语法的符号集。
- [图灵机（Turing machine）](https://zh.wikipedia.org/wiki/图灵机)：又称确定型图灵机，是英国数学家艾伦·图灵于 1936 年提出的一种将人的计算行为抽象掉的数学逻辑机，其更抽象的意义为一种计算模型，可以看作等价于任何有限逻辑数学过程的终极强大逻辑机器。
- [图灵完备性](https://zh.wikipedia.org/wiki/圖靈完備性)：在可计算性理论里，如果一系列操作数据的规则（如指令集、编程语言、细胞自动机）可以用来模拟单带图灵机，那么它是图灵完全的。这个词源于引入图灵机概念的数学家艾伦·图灵。虽然图灵机会受到储存能力的物理限制，图灵完全性通常指“具有无限存储能力的通用物理机器或编程语言”。
- 终结符： 最终在代码中出现的字符（[ https://zh.wikipedia.org/wiki/ 終結符與非終結符](https://zh.wikipedia.org/wiki/終結符與非終結符))
- 产生式： 在计算机中指 Tiger 编译器将源程序经过词法分析（Lexical Analysis）和语法分析（Syntax Analysis）后得到的一系列符合文法规则（Backus-Naur Form，BNF）的语句
- 静态和动态语言：[ https://www.cnblogs.com/raind/p/8551791.html](https://www.cnblogs.com/raind/p/8551791.html)
- 强类型： 无隐式转换
- 弱类型： 有隐式转换
- 协变与逆变：[ https://jkchao.github.io/typescript-book-chinese/tips/covarianceAndContravariance.html](https://jkchao.github.io/typescript-book-chinese/tips/covarianceAndContravariance.html)


# JS类型



## Atom

### Grammer

+ Literal
+ Variable
+ Keywords
+ Whitespace
+ Line Terminator

### Runtime

+ Types
+ Execution Context

## Types

+ Number
+ String
+ Boolean
+ Object
+ Null 
+ Undefined
+ Symbol

### Number

+ IEEE 754 Double Float

  + Sign(1)
  + Exponent(11)
  + Fraction(52)

+ Grammar

  + DecimalLiteral
    + 0
    + 0.
    + .2
    + 1e3
  + BinaryIntegerLiteral
    + 0b111
  + OctallIntegerLiteral
    + 0o10
  + HexIntegerLiteral
    + 0xFF

  语法冲突：

  0.toString() wrong

  0 .toString right

### String

+ Character

+ Code Point

+ Encoding

  

+ 字符集

  + ASCII
  + Unicode
  + UCS
  + GB
    + GB2312
    + GBK（GB13000）
    + GB18030
  + ISO-8859
  + BIG5 

+ Grammar

  + "abc"

  + 'abc'

  + ```
    `abc`
    ```

+ Template

  + ```
    ab${x}abc${y}abc
    ```

### Boolean

+ true
+ false

### Null & Undefined

	+ null:是关键字，不能赋值
	+ undefined：不是关键字，可以赋值，容易引起错误
	+ void 0；

### Object

设计对象的状态和行为时，应该遵循“行为改变状态”的原则。

#### Object in JavaScript

##### 原型
当我们访问属性时，如果当前对象没有，则会沿着原型找原型对象是否有此名称的属性，而原型对象还可能有原型，形成了“原型链”。
##### 属性

+ Key可以是String 或Symbol，

+ 数据属性：用于描述状态

+ 访问器属性：用于描述行为

#### Object API/Grammar

+ {} [] Object.defineProperty
+ Object.create、Object.setPrototypeOf、Object.getPrototypeOf
+ new/class/extends
+ new /function/prototype