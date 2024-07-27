import {useState,useRef} from "react";
import emailjs from "@emailjs/browser";

function Doubt()
{
	const [name, setName] = useState("");
	const [doubt, setDoubt] = useState("");
	const [ans, setAns] = useState("");

	const hName = (event) => {setName(event.target.value);}
	const hDoubt = (event) => {setDoubt(event.target.value);}

	const rName = useRef();

	const send = (event) => {
		event.preventDefault();
		let data= {"name": name, "doubt": doubt};
		emailjs.send("service_99999","template_99999",data,"jPbLeoHRR4TaoADuB")
		.then(res => {
			alert("We will get back to you");
			setName("");
			setDoubt("");
			rName.current.focus();
		})
		.catch(err => console.log("issue "+err));
	}
	return(
	<>
	<center>
	<h1>Doubt Application</h1>
	<form onSubmit={send}>
	<input type="text" placeholder="Enter Your Name"
	onChange={hName} value={name} ref={rName}/>
	<br/><br/>
	<textarea placeholder="Enter Your Doubt" rows={3} cols={40} 
	onChange={hDoubt} value={doubt}></textarea>
	<br/><br/>
	<input type="submit" value="Submit"/>
	</form>
	</center>
	</>
	);
}
export default Doubt;