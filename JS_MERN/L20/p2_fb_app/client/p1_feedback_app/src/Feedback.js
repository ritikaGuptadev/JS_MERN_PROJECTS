import {useState,useRef} from "react";
import axios from "axios";

function Feedback()
{
	const rName = useRef();
	const [name,setName] = useState("");
	const [feedback,setFeedback] = useState("Job");

	const hName = (event) => {setName(event.target.value);}
	const hFeedback = (event) => {setFeedback(event.target.value);}

	const save = (event) => {
		event.preventDefault();
		let data = {name, feedback};
		let url = "http://localhost:9000/save";
		axios.post(url,data)
		.then(res => {
			alert("Congratss");
			setName("");
			setFeedback("Job");
			rName.current.focus();
			return;
		})
		.catch(err => alert("Issue "+err));
	}

	return(
	<>
	<center>
	<h1>What Next ???</h1>
	<form onSubmit={save}>
	<input type="text" placeholder="Enter Your Name"
	onChange={hName} value={name} ref={rName}/>
	<br/><br/>
	<input type="radio" name="f" value="Job" defaultChecked={true}
	onChange={hFeedback} checked={feedback == "Job"}/>Job
	<input type="radio" name="f" value="MS" 
	onChange={hFeedback}/>MS
	<input type="radio" name="f" value="MBA"
	onChange={hFeedback}/>MBA
	<br/><br/>
	<input type="submit" value="Submit"/>
	</form>
	</center>
	</>
	);
}
export default Feedback;