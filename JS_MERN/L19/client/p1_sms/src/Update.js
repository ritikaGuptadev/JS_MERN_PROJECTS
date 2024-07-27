import {useState, useRef, useEffect} from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";

function Update()
{
	const rRno = useRef();
	const loc = useLocation();
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
		let url = "http://localhost:9000/change";
		let data = {rno, name, marks};
		axios.put(url, data)
		.then(res => {
			if(res.data.affectedRows == 1)
			{
				setAns("Record Updated");
				setRno("");
				setName("");
				setMarks("");
				rRno.current.focus();
				return;
			}
			if(res.data.errno == 1062)
			{
				setAns("Roll No Already Exits");
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
export default Update;