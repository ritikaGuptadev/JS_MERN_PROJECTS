const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
	host: "sql12.freesqldatabase.com",
	user:"sql12672826",
	password:"SF8JzqT6MW",
	database:"sql12672826"
});

app.post("/save",(req,res) => {
	let data = [req.body.name, req.body.feedback];
	let sql = "insert into Feedback values(?, ?)";
	con.query(sql, data, (err, result) => {
		if(err)	res.send(err);
		else	res.send(result);
	});
	
});

app.listen(9004, () => {console.log("Server Ready @9004")});