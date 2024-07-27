import {useState, useRef} from "react";
import Aboutus from "./Aboutus";
import Navbar from "./Navbar";

function Home()
{
	const [num, setNum] = useState("");
	const [ans,setAns] = useState("");
	const rNum = useRef();
	const hNum = (event) => {setNum(event.target.value);}

	const find = (event) => {
		event.preventDefault();
		if(num == "")
		{
			alert("Number Is Empty !!");
			setAns();
			rNum.current.focus();
			return;
		}
		let n = parseInt(num);
		let r = (n % 2 == 0) ? "Even" : "Odd";
		let ans = n+ " is "+r;
		setAns(ans);
	}
	return(
	<>
	<center>
	<Navbar/>
	<h1>Even Odd App</h1>
	<form onSubmit={find}>
		<input type="number" placeholder="Enter Integer" onChange={hNum} ref={rNum}/>
		<br/><br/>
		<input type="submit" value="Find Even/Odd"/>
	</form>
	<h2>{ans}</h2>
	</center>
	</>
	);
}
export default Home;