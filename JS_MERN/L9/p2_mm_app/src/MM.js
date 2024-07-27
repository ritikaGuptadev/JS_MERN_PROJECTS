import {useState,useEffect} from "react";
import axios from "axios";
function MM()
{
	useEffect( () => {
		show();
		setInterval(show, 10000);
	},[]);
	
	const[msg,setMsg] = useState("");
	const[aut,setAut] = useState("");

	const show = (event) => {
		
		let url="https://api.quotable.io/random";
		axios.get(url)
		.then(res => {
			setMsg(res.data.content);
			setAut(res.data.author);
		})
		.catch(err => alert("issue: "+err));
	}
	return(
	<>
		<center>
			<h1>Automatic Motivational Msg</h1>

			<h2>{msg}</h2>
			<h2>{aut}</h2>
		</center>
	</>
	);
}
export default MM;