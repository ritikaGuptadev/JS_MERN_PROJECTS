import {useState, useRef} from "react";
import axios from "axios";

export default function Create()
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
			if(res.data.insertedId == rno)
			{
				setAns("Record Inserted");
				setRno("");
				setName("");
				setMarks("");
				 rRno.current.focus();
				return;
			}
			else
			{
				setAns("Data Already Exist");
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
 