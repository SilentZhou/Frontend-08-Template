学习笔记

## JS表达式
### Grammar

+ Tree vs Priority

### Expressions

####  Member

+ a.b
+ a[b]
+ foo ` string
+ super.b
+ super['b']
+ new.target
+ new Foo()

#### New

+ new Foo

Example:

new a()()

new new a()

### Reference

+ Object
+ Key
+ delete
+ assign

### Call

+ foo()
+ super()
+ foo()['b']
+ foo().b
+ foo`abc

Example:

New a()['b']  ——new优先级更高

### Left Handside & Right Handside

#### Example：

a.b = c ;

a+b = c

### Update

+ a++
+ a--
+ --a
+ ++a

### Unary

+ delete a.b
+ void foo()
+ typeof a
+ `+ a`
+ `- a`
+ ! a
+ await a

### Exponetal

+ **

#### Example:

3 ** 2 ** 3  -先进行后面的运算

3 ** ( 2 ** 3 )

### Multiplicative

+ `* / %`

### Additive

+ `+ -`

### Shift

+ <<  >>  >>>

### Relationship

 +  < > < = > = instanceOf in

### Equality

+ ==
+ !=
+ ===
+ !==

### Bitwise

+ & ^ |

### Logical

+ &&
+ ||

### Conditional

+ ? :

## Statement

### Grammar

+ 简单语句
+ 组合语句
+ 声明

### Runtime

+ Completion Record
+ Lexical Environment



### Completion Record

```javascript
If(x == 1)
	return 10;
```

+ [[type]]: normal,break,continue,return,or throw
+ [[value]]: 基本类型
+ [[target]]: label

### 简单语句

+ ExpressionStatement
+ EmptyStatement
+ DebuggerStatement
+ ThrowStatement
+ ContinueStatement
+ BreakStatement
+ ReturnStatement

### 复合语句

+ BlockStatement
+ IfStatement
+ SwitchStatement
+ IterationStatement
+ WithStatement
+ LabelledStatement
+ TryStatement

### 声明

+ FunctionDeclaration
+ GeneratorDeclaration
+ AsyncGeneratorDeclaration
+ VariableStatement
+ ClassDeclaration
+ LexicalDeclaration

### 预处理



```
var a= 2;
void function(){
  a = 1;
  return;
  var a;
}();
console.log(a);  // 2
```

```
var a= 2;
void function(){
  a = 1;
  return;
  const a;
}();
console.log(a);  // SyntaxError: Missing initializer in const declaration

```



### 作用域	 

var的作用域是函数体内，const的作用域是花括号内。

## JS执行粒度（运行时）

+ 宏任务
+ 微任务（Promise）
+ 函数调用（Execution Context）
+ 语句/声明（Completion Record）
+ 表达式（Reference）
+ 直接量/变量/this......

### 函数调用

Execution Context

+ code evaluation state
+ Function
+ Script or Module
+ Generator
+ Realm
+ LexicalEnvrionment
+ VariableEnvrionment



### Function-Closure

```javascript
var y=2;

function foo2(){
	console.log(y);
}

export foo2;
```

Function: foo2

+ Environment Record:  `y:2`
+ Code:  `console.log(y)`

ES2018后没有`scope chain`这个说法。