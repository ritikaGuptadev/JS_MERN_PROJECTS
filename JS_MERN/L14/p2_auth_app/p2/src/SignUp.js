import {useState,useEffect} from "react";
import NavBar from "./NavBar";
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import app from "./Firebase";

function SignUp()
{
	const nav = useNavigate();
	useEffect( () => {
		let un = localStorage.getItem("un");
		if(un != null)
		{
			nav("/")
		}
	},[]);
	const [email,setEmail] = useState("");
	const [p1,setP1] = useState("");
	const [p2,setP2] = useState("");
	const [ans,setAns] = useState("");

	const hEmail = (event) => {setEmail(event.target.value);}
	const hP1 = (event) => {setP1(event.target.value);}
	const hP2 = (event) => {setP2(event.target.value);}
	
	const save = (event) => {
		event.preventDefault();
		if(p1 == p2)
		{
			const auth = getAuth();
			createUserWithEmailAndPassword(auth,email,p1)
			.then(res => nav("/login"))
			.catch(err => setAns("Issue "+err));
		}
		else
		{
			setAns("Password Does Not Match!!!");
		}
	}
	return(
	<>
	<center>
	<NavBar/>
	<h1>SignUp Page</h1>
	<form onSubmit={save}>
	<input type="email" placeholder="Enter Email"
	onChange={hEmail} value={email}/>
	<br/><br/>
	<input type="password" placeholder="Enter Password"
	onChange={hP1} value={p1}/>
	<br/><br/>
	<input type="password" placeholder="Enter Confirm Password"
	onChange={hP2} value={p2}/>
	<br/><br/>
	<input type="submit" value="Register"/>
	</form>
	<h2>{ans}</h2>
	</center>
	</>
	);
}
export default SignUp;