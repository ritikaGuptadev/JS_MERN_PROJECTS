import {useState, useRef, useEffect} from "react";
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";

export default function Update()
{
	const rRno = useRef();
	const loc = useLocation();
	const nav = useNavigate();
	const [rno,setRno] =  useState("");
	const [name,setName] =  useState("");
	const [marks,setMarks] =  useState("");
	const [ans,setAns] =  useState("");
	
	const hRno = (event) => {setRno(event.target.value);}
	const hName = (event) => {setName(event.target.value);}
	const hMarks = (event) => {setMarks(event.target.value);}

	useEffect( () => {
		setRno(loc.state.r);
		setName(loc.state.n);
		setMarks(loc.state.m);
	},[]);

	const save = (event) => {
		event.preventDefault();
		let url = "http://localhost:9000/modify";
		let data = {rno, name, marks};
		axios.put(url, data)
		.then(res => {
				alert("Record Updated");
				nav("/");
		})
		.catch(err => alert("Issue "+err));
	}
	return(
	<>
	<center>
	<h1>Update Page</h1>
	<form onSubmit={save}>
		<input type="number" placeholder="Enter Roll No"
		onChange={hRno} value={rno} ref={rRno} disabled={true}/>
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
