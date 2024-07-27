import {useState,useRef} from "react";
import db from "./firebase";
import {ref,set} from "firebase/database";

function Success()
{
	const [name,setName] = useState("");
	const [company,setCompany] = useState("");
	const [pkg,setPkg] = useState("");

	const rName = useRef();

	const hName = (event) => {setName(event.target.value);}
	const hCompany = (event) => {setCompany(event.target.value);}
	const hPkg = (event) => {setPkg(event.target.value);}

	const save = (event) => {
		event.preventDefault();
		let data = {name, company, pkg};
		let node = name + " " + new Date();
		let r = ref(db,"student/" + node);
		set(r,data);
		alert("Congrats!!!");
		setName("");
		setCompany("");
		setPkg("");
		rName.current.focus();
	}
	return(
	<>
	<center>
	<h1>Success Story App</h1>
	<form onSubmit={save}>
	<input type="text" placeholder="Enter Name"
	onChange={hName} value={name} ref={rName}/>
	<br/><br/>
	<input type="text" placeholder="Enter Company Name"
	onChange={hCompany} value={company}/>
	<br/><br/>
	<input type="number" step="0.01" placeholder="Enter Package"
	onChange={hPkg} value={pkg}/>
	<br/><br/>
	<input type="submit" value="Submit"/>
	</form>
	</center>
	</>
	);
}
export default Success;