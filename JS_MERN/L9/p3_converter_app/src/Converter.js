import {useState,useRef} from "react";
import axios from "axios";
function Converter()
{

	const[num,setNum] = useState("");
	const[ans,setAns] = useState("");

	const hNum = (event) => {setNum(event.target.value);}
	
	const rNum = useRef();

	const find = (event) => {
		event.preventDefault();

		if(num == "")
		{
			alert("Amt Is Empty");
			setAns();
			rNum.current.focus();
			return;
		}
		let url="https://api.exchangerate-api.com/v4/latest/USD";
		axios.get(url)
		.then(res => {
			let dr = res.data.rates.INR;
			let d = parseFloat(num);
			let r = dr * d;
			let msg = "Rs = "+r.toFixed(2);
			setAns(msg);
		})
		.catch(err => alert("issue "+err));

	}
	return(
	<>
	<center>
		<h1>Currency Converter App</h1>
		<form onSubmit={find}>
			<input type="number" step="any" placeholder="enter amt in $$"
			onChange={hNum} ref={rNum}/>
			<br/><br/>
			<input type="submit" value="Convert"/>
		</form>
		<h2>{ans}</h2>
	</center>
	</>
	);
}
export default Converter;