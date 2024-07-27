import {useState,useRef} from "react"
import db from "./Firebase";
import {ref,set} from "firebase/database";
function Languages()
{
	const[name,setName] = useState("");
	const[python,setPython] = useState(false);
	const[java,setJava] = useState(false);
	const[js,setJs] = useState(false);

	const rName = useRef();

	const hName = (event) => {setName(event.target.value);}
	const hPython = (event) => {setPython(!python);}
	const hJava = (event) => {setJava(!java);}
	const hJs = (event) => {setJs(!js);}
	
	const save = (event) => {
		event.preventDefault();
		let Lang = "";
		if(python)
		{
			Lang += " Python";
		}
		if(java)
		{
			Lang += " Java";
		}
		if(js)
		{
			Lang += " Js";
		}
		alert("Thankyouuu");
		let data = {name,Lang};
		let node = name+" "+new Date();
		let r = ref(db, "/Languages/" +node);
		set(r,data);
		setName("");
		setPython(false);
		setJava(false);
		setJs(false);
		rName.current.focus();
	}
	return(
	<>
	<center>
	<h1>Languages You Know</h1>
	<form onSubmit={save}>
	<input type="text" placeholder="Enter Your Name"
	onChange = {hName} value={name} ref={rName}/>
	<br/><br/>
	<input type="checkbox" 
	onChange = {hPython} checked={python}/>Python
	<input type="checkbox" 
	onChange = {hJava} checked={java}/>Java
	<input type="checkbox" 
	onChange = {hJs} checked={js}/>Js
	<br/><br/>
	<input type="submit" value="Submit"/>
	</form>
	</center>
	</>
	);
}
export default Languages;