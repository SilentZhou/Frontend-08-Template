const http = require("http");

http.createServer((req,res)=>{
  // console.log("req",req)
  let body = []
  req.on("error",(err)=>{
    console.error(err)
  }).on("data",(chunk)=>{
    console.log("data",chunk)
    body.push(chunk.toString());
  }).on("end",()=>{
    // console.log("body 1",body);
    // body=Buffer.concat(body).toString();
    // console.log("body 2",body);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(
`<html maaa=a >
<head>
<style>
#container{
  width:500px;
  height:300px;
  display:flex;
}
#container #myid{
  width:200px;
}
#container .c1{
  flex:1
}

</style>
</head>
<body>
  <div id="container">
    <div id="myid"/>
    <div class="c1"/>
  </div>
</body>
</html>`)
  })
}).listen(8089)

console.log("server started")