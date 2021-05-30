## 1-10周总结

## 编程与算法训练

### JavaScript的异步机制

+ callback
+ [Promise](https://promisesaplus.com/)
+ [async](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function)/await

### 广度优先搜索

+ [广度优先搜索](https://zh.wikipedia.org/zh-hans/%E5%B9%BF%E5%BA%A6%E4%BC%98%E5%85%88%E6%90%9C%E7%B4%A2)
+ [深度优先搜索](https://zh.wikipedia.org/wiki/%E6%B7%B1%E5%BA%A6%E4%BC%98%E5%85%88%E6%90%9C%E7%B4%A2)

### LL算法构建AST

LL算法：从左到右扫描，从左到右规约。

[Abstract syntax tree](http://en.wikipedia.org/wiki/Abstract_syntax_tree)

四则运算：

```bash
<Expression>::= <AdditiveExpression><EOF>

<AdditiveExpression>::= 
	<MultiplicativeExpression> 
	|<AdditiveExpression><+><MultiplicativeExpression>
	|<AdditiveExpression><-><MultiplicativeExpression>

<MultiplicativeExpression>::= 
	<Number>
	|<MultiplicativeExpression><*> <Number>
	|<MultiplicativeExpression> </> <Number>

```

### 字符串分析算法

+ 字典树：大量高重复字符串的存储与分析
+ KMP：在长字符串里找模式
+ Wildcard：带通配符的字符串模式
+ 正则：字符串通用模式匹配
+ 状态机：通用的字符串分析
+ LL LR：字符串多层级结构分析

### Proxy与双向绑定

## 重学JavaScript

### JS语言通识

\- [乔姆斯基谱系](https://zh.wikipedia.org/wiki/乔姆斯基谱系)：是计算机科学中刻画形式文法表达能力的一个分类谱系，是由诺姆·乔姆斯基于 1956 年提出的。它包括四个层次：

  \- 0- 型文法（无限制文法或短语结构文法）包括所有的文法。

  \- 1- 型文法（上下文相关文法）生成上下文相关语言。

  \- 2- 型文法（上下文无关文法）生成上下文无关语言。

  \- 3- 型文法（正规文法）生成正则语言。

\- [巴科斯诺尔范式](https://zh.wikipedia.org/wiki/巴科斯范式)：即巴科斯范式（英语：Backus Normal Form，缩写为 BNF）是一种用于表示上下文无关文法的语言，上下文无关文法描述了一类形式语言。它是由约翰·巴科斯（John Backus）和彼得·诺尔（Peter Naur）首先引入的用来描述计算机语言语法的符号集。

\- [图灵机（Turing machine）](https://zh.wikipedia.org/wiki/图灵机)：又称确定型图灵机，是英国数学家艾伦·图灵于 1936 年提出的一种将人的计算行为抽象掉的数学逻辑机，其更抽象的意义为一种计算模型，可以看作等价于任何有限逻辑数学过程的终极强大逻辑机器。

\- [图灵完备性](https://zh.wikipedia.org/wiki/圖靈完備性)：在可计算性理论里，如果一系列操作数据的规则（如指令集、编程语言、细胞自动机）可以用来模拟单带图灵机，那么它是图灵完全的。这个词源于引入图灵机概念的数学家艾伦·图灵

### JS类型

- Number

  + IEEE 754 Double Float

  + Sign(1)

  + Exponent(11)

  + Fraction(52)

- String

- Boolean

- Object

  - 设计对象的状态和行为时，应该遵循“行为改变状态”的原则。
  - 当我们访问属性时，如果当前对象没有，则会沿着原型找原型对象是否有此名称的属性，而原型对象还可能有原型，形成了“原型链”。
  - Key可以是String 或Symbol
  - 数据属性：用于描述状态
  - 访问器属性：用于描述行为

- Null 

  - null:是关键字，不能赋值

- Undefined

  - undefined：不是关键字，可以赋值，容易引起错误

- Symbol

### JS语句

#### **简单语句**

-  ExpressionStatement
-  EmptyStatement
-  DebuggerStatement
-  ThrowStatement
-  ContinueStatement
-  BreakStatement
-  ReturnStatement

#### 复合语句

- BlockStatement
- IfStatement
- SwitchStatement
- IterationStatement
- WithStatement
- LabelledStatement
- TryStatement

#### 声明

-  FunctionDeclaration
-  GeneratorDeclaration
-  AsyncGeneratorDeclaration
-  VariableStatement
-  ClassDeclaration
-  LexicalDeclaration

### JS结构化

#### JS执行粒度（运行时）

- 宏任务
- 微任务（Promise）
- 函数调用（Execution Context）
- 语句/声明（Completion Record）
- 表达式（Reference）
- 直接量/变量/this......

#### 函数调用

##### Execution Context

-  code evaluation state
-  Function
-  Script or Module
-  Generator
-  Realm
-  LexicalEnvrionment
   - this
   - new.target
   - super
   - 变量
-  VariableEnvrionment
   - 历史遗留包袱，仅仅用于处理var声明

##### Environment Record

+ Environment Records

  + Declaration Environment Records
    + Function Environment Records
    + module Environment Records
  + Global Environment Records
  + Object Environment Records

