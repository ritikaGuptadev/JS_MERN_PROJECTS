import {useState,useEffect} from "react";
import NavBar from "./NavBar";
import app from "./Firebase";
import {getAuth,sendPasswordResetEmail} from "firebase/auth";
import {useNavigate} from "react-router-dom";

function ForgotPassword()
{	
	const nav = useNavigate();
	useEffect ( () => {
		let un = localStorage.getItem("un");
		if(un != null)
			nav("/");
	},[]);
	const [email,setEmail] = useState("");
	const [p,setP] = useState("");
	const [ans,setAns] = useState("");

	const hEmail = (event) => {setEmail(event.target.value);}
	const hP = (event) => {setP(event.target.value);}

	const save = (event) => {
		event.preventDefault();
		const auth = getAuth();
		sendPasswordResetEmail(auth,email)
		.then(res => {
			nav("/login");
		})
		.catch(err => setAns("Issue "+err));
	}
	return(
	<>
	<center>
	<NavBar/>
	<h1>Forgot Password</h1>
	<form onSubmit={save}>
	<input type="email" placeholder="Enter Registered Email"
	onChange={hEmail} value={email}/>
	<br/><br/>
	<input type="submit" value="Reset"/>
	</form>
	<h2>{ans}</h2>
	</center>
	</>
	);
}
export default ForgotPassword;