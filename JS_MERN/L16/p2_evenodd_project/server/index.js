const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/find", (req, res) => {
	let num = req.query.number;
	let n = parseInt(num);
	let msg = n%2==0 ? "Even":"Odd";
	res.json({"msg": msg});
});
app.listen(9002, () => {console.log("Server ready @9002")});