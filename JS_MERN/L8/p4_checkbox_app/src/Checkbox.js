import {useState,useRef} from "react";
function Checkbox()
{
	const [name,setName] = useState("");
	const [python,setPython] = useState(false);
	const [java,setJava] = useState(false);
	const [js,setJs] = useState(false);
	const[ans,setAns] = useState(false);

	const rName = useRef();

	const hName = (event) => {setName(event.target.value);}
	const hPython = (event) => {setPython(!python);}
	const hJava = (event) => {setJava(!java);}
	const hJs = (event) => {setJs(!js);}

	const show = (event) => {
		event.preventDefault();
		if(name == "")
		{
			alert("Name is Empty");
			setName("");
			setAns();
			rName.current.focus();
			return;
		}
		else if(!name.match(/^[A-Za-z ]+$/))
		{
			alert("Only alphabets are allowed");
			setAns("");
			rName.current.focus();
			return;
		}
		else if(name.trim().length < 2)
		{
			alert("Minimum two letters needed");
			setName("");
			rName.current.focus();
			setAns("");
			return;
		}
		let lang = "";
		if(python)	lang = lang + " Python";
		if(java)		lang = lang + " Java";
		if(js) 		lang = lang + " Js";

		let msg = name+" "+lang;
		setAns(msg);
	}
	return(
	<>
	<center>
		<h1>Languages You Know</h1>
		<form onSubmit={show}>
			<input type="text" placeholder="enter your name" onChange={hName}/>
			<br/><br/>
			<input type="checkbox" value="Python" onChange={hPython} ref={rName}/>Python
			<input type="checkbox" value="Java" onChange={hJava}/>Java
			<input type="checkbox" value="Js" onChange={hJs}/>Js
			<br/><br/>
			<input type="submit" value="Submit"/>
		</form>
		<h2>{ans}</h2>
	</center>
	</>
	);
}
export default Checkbox;