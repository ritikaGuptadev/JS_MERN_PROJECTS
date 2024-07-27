import {useState,useRef} from "react";
import {useNavigate} from "react-router-dom";
function Sqrt()
{
	const [num,setNum] = useState("");
	const hNum = (event) => {setNum(event.target.value);}
	const rNum = useRef();
	const nav = useNavigate();
	const find = (event) => {
		event.preventDefault();
		if(num == "")
		{
			alert("Number is Empty");
			rNum.current.focus();
			return;
		}
		let n= parseFloat(num);
		if(n < 0)
		{
			alert("Number is Negative");
			rNum.current.focus();
			return;
		}
		let m = n ** 0.5;
		let r = m.toFixed(2);
		nav("/result", {state : {"res":r}});
	}
	return(
	<>
	<center>
		<h1>Square Root App</h1>
		<form onSubmit={find}>
		<input type="number" step="any" placeholder="Enter Number" onChange={hNum} ref={rNum}/>
		<br/><br/>
		<input type="submit" value="Find Square Root"/>
		</form>
	</center>
	</>
	);
}
export default Sqrt;