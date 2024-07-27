import {useState} from "react";
import axios from "axios";
function Mot()
{
	const[msg,setMsg] = useState("");
	const[aut,setAut] = useState("");

	const show = (event) => {
		event.preventDefault();
		let url="https://api.quotable.io/random";
		axios.get(url)
		.then(res => {
			setMsg(res.data.content);
			setAut(res.data.author);
		})
		.catch(err => alert("issue "+err));
	}
	
	return(
		<>
		<center>
			<h1>Motivation Message App</h1>
			<form onSubmit={show}>
				<input type="submit" value="Get Msg"/>
			</form>
			<h2>{msg}</h2>
			<h2>{aut}</h2>
		</center>
		</>
	);
}
export default Mot;