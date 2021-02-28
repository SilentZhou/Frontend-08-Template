### 浏览器工作原理总论

1. 输入URL，通过HTTP请求服务器，服务器返回HTML
2. 浏览器解析HTML得到DOM树
3. 计算css 属性，得到DOM with CSS
4. 经过layout ，得到DOM with position
5. 经过render ，得到Bitmap（位图）

### 状态机 

+ 每一个状态都是一个机器
  + 在每一个机器里，我们可以做计算、存储、输出...
  + 所有的这些机器接受的输入是一致的
  + 状态机的每一个机器本身没有状态，如果我们用函数来表示的话，它应该是纯函数（无副作用）
+ 每一个机器知道下一个状态
  + 每个机器都有确定的下一个状态（Moore）
  + 每个机器根据输入决定下一个状态（Mealy）

### JS中的有限状态机
```javascript
function state(input){
	return next
}
while(input){
	state= state(input);
}
```



### HTTP请求



```
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"username":"xyz","password":"xyz"}' \
  http://localhost:8081/
```

### TCP与IP的一些基础知识