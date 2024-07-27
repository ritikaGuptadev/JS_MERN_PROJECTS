import {useState} from "react";

function Square()
{
	const[num,setNum] = useState("");
	const[ans,setAns] = useState("");
	
	const hNum = (event) => {setNum(event.target.value);}

	const find = (event) => {
		event.preventDefault();
		if(num == "")
		{
			alert("Number Is Empty!!");
			setAns();
			return;
		}

		let n = parseFloat(num);
		let r = n * n;
		let msg = "Square= "+r.toFixed(2);
		setAns(msg);
	}
	return(
	<>
	<center>
	<h1>Square Application</h1>
	<form onSubmit={find}>
		<input type="number" step="any" placeholder="enter number"
		onChange={hNum}/>
		<br/><br/>
		<input type="submit" value="Find Square"/>
	</form>
	<h2>{ ans }</h2>
	</center>
	</>
	);
}
export default Square;