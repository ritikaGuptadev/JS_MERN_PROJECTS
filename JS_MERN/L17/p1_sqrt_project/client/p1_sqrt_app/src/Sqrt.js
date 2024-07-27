import {useState,useRef} from "react";
import axios from "axios";

function Sqrt()
{
	const [num,setNum] = useState("");
	const [ans,setAns] = useState("");
	const rNum = useRef();
	
	const hNum = (event) => {setNum(event.target.value);}

	const save= (event) => {
		event.preventDefault();
		if(num == "")
		{
			alert("Number Is Empty!!");
			setAns("");
			rNum.current.focus();
			return;
		}
		else if(parseFloat(num) < 0)
		{
			alert("Negative Number Not Allowed!!");
			setAns("");
			rNum.current.focus();
			return;
		}
		let url = "http://localhost:9000/find";
		let data = {params: {number:num}};
		axios.get(url,data)
		.then(res => setAns(res.data.msg))
		.catch(err => setAns("Issue "+err));
	}
	return(
	<>
	<center>
		<h1>Square Root Application</h1>
		<form onSubmit={save}>
		<input type="number" step = "any" placeholder="Enter Number"
		onChange={hNum} value={num} ref = {rNum}/>
		<br/><br/>
		<input type="submit" value="Find Square Root"/>
		</form>
		<h2>{ans}</h2>
	</center>
	</>
	);
}
export default Sqrt;