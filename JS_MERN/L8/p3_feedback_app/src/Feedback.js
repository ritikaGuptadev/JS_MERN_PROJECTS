import {useState,useRef} from "react";

function Feedback()
{

	const[name,setName] = useState("");
	const[feedback,setFeedback] = useState("");
	const [ans,setAns] = useState("");
	
	const rName = useRef();

	const hName = (event) => {setName(event.target.value);}
	const hFeedback = (event) => {setFeedback(event.target.value);}

	const feed = (event) => {
		event.preventDefault();
		if(name == "")
		{
			alert("Name is Empty!!");
			setAns();
			rName.current.focus();
			return; 
		}
		else if(!name.match(/^[A-Za-z ]+$/))
		{
			alert("Only alphabets are allowed!!");
			setName("");
			setAns();
			rName.current.focus();
			return; 
		}
		else if(name.trim().length < 2)
		{
			alert("At least 2 characters needed!!!");
			setName("");
			setAns();
			rName.current.focus();
			return; 
		}
		
		let msg = name+" "+feedback;
		setAns(msg);
	}
	return(
	<>
		<center>
			<h1>Feedback Application</h1>
			<form onSubmit={feed}>
				<input type="text" placeholder="enter name"
				onChange={hName} ref={rName}/>
				<br/><br/>
				<input type="radio" name="f" value="Excellent" onChange={hFeedback} defaultChecked={true}/>Excellent
				<input type="radio" name="f" value="Superb" onChange={hFeedback}/>Superb
				<input type="radio" name="f" value="Good" onChange={hFeedback}/>Good
				<br/><br/>
				<input type="submit"/>
			</form>
			<h2>{ans}</h2>
		</center>
	</>
	);
}
export default Feedback;