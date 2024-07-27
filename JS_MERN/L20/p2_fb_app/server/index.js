const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/save",(req,res) => {
	const url = "mongodb://0.0.0.0.27017";
	const client = new MongoClient(url);
	const db = client.db("fb_29dec23");
	const coll = db.collection("student");
	const doc = {"name":req.body.name, "feedback": req.body.feedback};

	coll.insertOne(doc)
	.then(result => res.send(result))
	.catch(error => res.send(error));
});

app.listen(9000, () => {console.log("Server Ready @9000");});