import {useState,useRef} from "react";
import axios from "axios";

function Success()
{
	const [name,setName] = useState("");
	const [company,setCompany] = useState("");
	const [pkg,setPkg] = useState();
	const rName = useRef();

	const hName = (event) => {setName(event.target.value);}
	const hCompany = (event) => {setCompany(event.target.value);}
	const hPkg = (event) => {setPkg(event.target.value);}

	const save = (event) => {
		event.preventDefault();
		let data = {name, company, pkg};
		let url = "http://localhost:9000/save";
		axios.post(url,data)
		.then(res => {
			alert("Congratsss");
			setName("");
			setCompany("");
			setPkg("");
			rName.current.focus();
		})
		.catch(err => alert("Issue "+err));
	}
	return(
	<>
	<center>
	<h1>Success Story App</h1>
	<form onSubmit={save}>
		<input type = "text" placeholder="Enter Name"
		onChange={hName} value={name} ref={rName}/>
		<br/><br/>
		<input type = "text" placeholder="Enter Company Name"
		onChange={hCompany} value={company}/>
		<br/><br/>
		<input type = "number" placeholder="Enter Package"
		onChange={hPkg} value={pkg}/>
		<br/><br/>
		<input type = "submit" value="Submit"/>
		<br/><br/>
	</form>
	</center>
	</>
	);
}
export default Success;