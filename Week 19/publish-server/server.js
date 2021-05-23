let http = require("http");
let fs = require("fs");

http
  .createServer(function (request, response) {
    console.log(request.headers);

    let outFile = fs.createWriteStream("../server/public/index.html");

    request.pipe(outFile);
    // request.on("data", (chunk) => {
    //   console.log("data", chunk);
    //   outFile.write(chunk);
    // });
    // request.on("end", () => {
    //   outFile.end();
    //   response.end("Success");
    // });
  })
  .listen(8082);
