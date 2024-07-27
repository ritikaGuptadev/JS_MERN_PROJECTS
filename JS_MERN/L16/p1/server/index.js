const http = require("http");
const url = require("url");

const server = http.createServer((req,res) => {
res.setHeader("Access-Control-Allow-Origin","*");

let path = url.parse(req.url,true);

if(path.pathname == "/find")
{
	let num = path.query.number;
	let n= parseInt(num);
	let msg = n % 2 == 0 ? "Even" : "Odd";
	res.write(msg);
	res.end();
}
});

server.listen(9000, () => {console.log("server ready @9000");});
