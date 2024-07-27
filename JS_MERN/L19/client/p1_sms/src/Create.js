import {useState, useRef} from "react";
import axios from "axios";

function Create()
{
	const rRno = useRef();

	const [rno,setRno] =  useState("");
	const [name,setName] =  useState("");
	const [marks,setMarks] =  useState("");
	const [ans,setAns] =  useState("");
	
	const hRno = (event) => {setRno(event.target.value);}
	const hName = (event) => {setName(event.target.value);}
	const hMarks = (event) => {setMarks(event.target.value);}

	const save = (event) => {
		event.preventDefault();
		let url = "http://localhost:9000/save";
		let data = {rno, name, marks};
		axios.post(url, data)
		.then(res => {
			if(res.data.affectedRows == 1)
			{
				setAns("Record Inserted");
				setRno("");
				setName("");
				setMarks("");
				rRno.current.focus();
				return;
			}
			if(res.data.errno == 1062)
			{
				setAns("Data Already Exits");
				setRno("");
				rRno.current.focus();
				return;
			}
		})
		.catch(err => setAns("Issue "+err));
	}
	return(
	<>
	<center>
	<h1>Create Page</h1>
	<form onSubmit={save}>
		<input type="number" placeholder="Enter Roll No"
		onChange={hRno} value={rno} ref={rRno}/>
		<br/><br/>
		<input type="text" placeholder="Enter Name"
		onChange={hName} value={name}/>
		<br/><br/>
		<input type="number" placeholder="Enter Marks"
		onChange={hMarks} value={marks}/>
		<br/><br/>
		<input type="submit" value="Save"/>
		<br/><br/>
	</form>
	<h2>{ans}</h2>
	</center>
	</>
	);
}
export default Create;