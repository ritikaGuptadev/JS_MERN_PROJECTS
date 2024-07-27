import {useState,useRef} from "react";
import {ref,set} from "firebase/database";
import db from "./Firebase";
function Feedback()
{
	const [name,setName] = useState("");
	const [fb,setFb] = useState("Excellent");

	const hName = (event) => {setName(event.target.value);}
	const hFb = (event) => {setFb(event.target.value);}

	const rName = useRef();

	const save = (event) => {
		event.preventDefault();
		let data = {name, fb};
		let node = name+ " "+new Date();
		let r = ref(db, "fb/"+ node);
		set(r,data);
		alert("Thankyouuu");
		setName("");
		setFb("Excellent");
		rName.current.focus();
	}
	return(
	<>
	<center>
	<h1>Feedback Application</h1>
	<form onSubmit = {save}>
	<input type="text" placeholder="Enter Name"
	onChange={hName} value={name} ref={rName}/>
	<br/><br/>
	<input type="radio" name="f" defaultChecked="true" 
	onChange={hFb} value="Excellent" checked={fb == "Excellent"} />Excellent
	<input type="radio" name="f"  
	onChange={hFb} value="Good" />Good
	<input type="radio" name="f" 
	onChange={hFb} value="Ok"/>Ok
	<br/><br/>
	<input type="submit" value="Submit"/>
	</form>
	</center>
	</>
	);
}
export default Feedback;