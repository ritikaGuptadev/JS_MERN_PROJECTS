import {useState,useRef} from "react";

function Sqrt()
{
	const [num,setNum] = useState("");
	const[ans,setAns] = useState("");
	
	const hNum = (event) => {setNum(event.target.value);}
	const rNum = useRef();

	const find = (event) => {
		event.preventDefault();

		if(num == "")
		{
			alert("number is empty");
			setAns();
			rNum.current.focus();
			return;
		}

		let n = parseFloat(num);
		
		if(n < 0)
		{
			alert("Negative number not allowed!!");
			setAns();
			rNum.current.focus();
			return;
		}
		let r = n ** 0.5;
		let msg = "Square Root= "+r.toFixed(2);
		setAns(msg);
	}

	return(
	<>
	<center>
		<h1>Square Root Finder</h1>
		<form onSubmit={find}>
			<input type="number" step="any" placeholder="enter number"
			onChange = {hNum} ref={rNum} />
			<br/><br/>
			<input type="submit" value="Find Square Root"/>
		</form>
		<h2> { ans }</h2>
	</center>
	</>
	);
}
export default Sqrt;