import {useState,useRef} from "react";
import axios from "axios";

function EvenOdd()
{
	const [num,setNum] = useState("");
	const [ans,setAns] = useState("");

	const rNum = useRef();

	const hNum = (event) => {setNum(event.target.value);}

	const check = (event) => {
		event.preventDefault();
		if(num == "")
		{
			alert("U did not enter number");
			setAns("");
			rNum.current.focus();
			return;
		}
		let url = "https://eo24dec23.onrender.com/find";
		let data = {params : {number: num}};
		axios.get(url,data)
		.then(res => setAns(res.data.msg))
		.catch(err => setAns("Issue: "+err));
	}
	return(
	<>
	<center>
	<h1>Even Odd App</h1>
	<form onSubmit={check}>
	<input type="number" placeholder="Enter Integer"
	onChange={hNum} ref={rNum} value={num}/>
	<br/><br/>
	<input type="submit" value="Find Even/Odd"/>
	</form>
	<h2>{ans}</h2>
	</center>
	</>
	);
}
export default EvenOdd;