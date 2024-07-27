import {useState,useRef} from "react";
import axios from "axios";

function Feedback()
{
	const rName = useRef();
	const [name,setName] = useState("");
	const [feedback,setFeedback] = useState("Excellent");

	const hName = (event) => {setName(event.target.value);}
	const hFeedback = (event) => {setFeedback(event.target.value);}

	const save = (event) => {
		event.preventDefault();
		let data = {name, feedback};
		let url = "https://feedbackapp-vr33.onrender.com/save";
		axios.post(url,data)
		.then(res => {
			alert("Congratss");
			setName("");
			setFeedback("Excellent");
			rName.current.focus();
			return;
		})
		.catch(err => alert("Issue "+err));
	}

	return(
	<>
	<center>
	<h1>FeedBack Application</h1>
	<form onSubmit={save}>
	<input type="text" placeholder="Enter Your Name"
	onChange={hName} value={name} ref={rName}/>
	<br/><br/>
	<input type="radio" name="f" value="Excellent" defaultChecked={true}
	onChange={hFeedback} checked={feedback == "Excellent"}/>Excellent
	<input type="radio" name="f" value="Good" 
	onChange={hFeedback}/>Good
	<input type="radio" name="f" value="Superb"
	onChange={hFeedback}/>Superb
	<br/><br/>
	<input type="submit" value="Submit"/>
	</form>
	</center>
	</>
	);
}
export default Feedback;