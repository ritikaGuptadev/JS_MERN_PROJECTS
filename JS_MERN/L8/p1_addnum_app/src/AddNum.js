import {useState,useRef} from "react";
function AddNum()
{

	const[num1,setNum1] = useState("");
	const[num2,setNum2] = useState("");
	const[ans,setAns] = useState("");

	const hNum1 = (event) => {setNum1(event.target.value);}
	const hNum2 = (event) => {setNum2(event.target.value);}

	const rNum1 = useRef();
	const rNum2 = useRef(); 
	const find = (event) => {
		event.preventDefault();
		if(num1 == "")
		{
			alert("Number1 is empty");
			setAns();
			rNum1.current.focus();
			return;
		}
		else if(num2 == "")
		{
			alert("Number2 is empty");
			setAns();
			rNum2.current.focus();
			return;
		}
	
		let n1 = parseFloat(num1);
		let n2 = parseFloat(num2);
		let r = n1+n2;
		let msg = "Addition of "+n1+" and "+n2+ " = "+r.toFixed(2);
		setAns(msg);
	}
	return(
	<>
	<center>
		<h1>Adding Number Application</h1>
		<form onSubmit={find}>
			<input type="number" step="any" placeholder="enter number1"
			onChange={hNum1} ref={rNum1}/>
			<br/><br/>
			<input type="number" step="any" placeholder="enter number2"
			onChange={hNum2} ref={rNum2}/>
			<br/><br/>
			<input type="submit" value="Add"/>
		</form>
		<h2>{ans}</h2>
	</center>
	</>
	);
}
export default AddNum;