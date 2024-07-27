import {useState,useRef} from "react";
import emailjs from "@emailjs/browser";
function Enquiry()
{
	const [name,setName] = useState("");
	const [college,setCollege] = useState("");
	const [phone,setPhone] = useState("");
	const [query,setQuery] = useState("");
	const [ans,setAns] = useState("");

	const hName = (event) => {setName(event.target.value);}
	const hCollege = (event) => {setCollege(event.target.value);}
	const hPhone = (event) => {setPhone(event.target.value);}
	const hQuery = (event) => {setQuery(event.target.value);}

	const rName = useRef();

	const se = (event) => {
		event.preventDefault();
		let data = {"name": name, "college": college, "phone": phone, "query": "query"};
		emailjs.send("service_12345","template_12345",data,"jPbLeoHRR4TaoADuB")
		.then(res => {
			alert("We will get back to u");
			setName("");
			setCollege("");
			setPhone("");
			setQuery("");
			rName.current.focus();
		})
		.catch(err => console.log("Issue "+err));
		
	}
	return(
	<>
	<center>
		<h1>Fill The Form</h1>
		<form onSubmit = {se}>
		<input type="text" placeholder="Enter Your Name" 
		onChange={hName} value={ name } ref={rName} required/>
		<br/><br/>
		<input type="text" placeholder="Enter Your College Name" 
		onChange={hCollege} value={ college }  required/>
		<br/><br/>
		<input type="number" placeholder="Enter Your Phone Number" 
		onChange={hPhone} value={ phone } required/>
		<br/><br/>
		<textarea rows="3" cols="20" placeholder="Enter Your Query"
		onChange={hQuery} value={ query }  required/>
		<br/><br/>
		<input type="submit" value="Submit"/>
		</form>
		<h2>{ans}</h2>
	</center>
	</>
	);
}
export default Enquiry;