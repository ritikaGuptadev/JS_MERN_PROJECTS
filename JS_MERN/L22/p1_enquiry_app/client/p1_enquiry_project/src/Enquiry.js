import {useState, useRef} from "react";
import axios from "axios";

export default function Enquiry()
{
	const rName = useRef();
	const [name,setName] = useState("");
	const [phone,setPhone] = useState("");
	const [query,setQuery] = useState("");
	const [ans,setAns] = useState("");

	const hName = (event) => {setName(event.target.value);}
	const hPhone = (event) => {setPhone(event.target.value);}
	const hQuery = (event) => {setQuery(event.target.value);}

	const save = (event) => {
		event.preventDefault();
		let data ={name, phone, query};
		let url = "http://localhost:9000/save";
		axios.post(url, data)
		.then(res => {
			alert(res.data);
			setAns("We will get back to u");
			setName("");
			setPhone("");
			setQuery("");
			rName.current.focus();
		})
		.catch(err => setAns("Issue "+err));
	}
	return(
	<>
	<center>
		<h1>Fill The Enquiry Form</h1>
		<form onSubmit={save}>
		<input type="text" placeholder="Enter Name"
		onChange={hName}  value={name} ref={rName}/>
		<br/><br/>
		<input type="number" placeholder="Enter Phone Number"
		onChange={hPhone}  value={phone} />
		<br/><br/>
		<textarea placeholder="Enter Query" rows={5}
		onChange={hQuery}  value={query} ></textarea>
		<br/><br/>
		<input type="submit" value="Submit"/>
		</form>
		<h2>{ans}</h2>
	</center>
	</>
	);
}