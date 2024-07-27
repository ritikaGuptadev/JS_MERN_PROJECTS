import {useState,useRef} from "react";
import {useNavigate} from "react-router-dom";
function EvenOdd()
{
	const [num,setNum] = useState("");
	
	const hNum = (event) => {setNum(event.target.value);}
	
	const rNum = useRef();
	
	const nav = useNavigate();

	const find = (event) => {
		event.preventDefault();
		
		if(num == "")
		{
			alert("Number Is Empty!!");
			rNum.current.focus();
			return;
		}
		let n = parseInt(num);
		let r = (n % 2 == 0) ? "Even" : "Odd";
		nav("/result", {state : {"res":r}});
	}
	return(
	<>
	<center>
	<form onSubmit={find}>
		<h1>Even Odd App</h1>
		<input type="number" placeholder="Enter Number" onChange={hNum} ref={rNum}/>
		<br/><br/>
		<input type="submit" value="Find Even/Odd"/>
	</form>
	</center>
	</>
	);
}
export default EvenOdd;