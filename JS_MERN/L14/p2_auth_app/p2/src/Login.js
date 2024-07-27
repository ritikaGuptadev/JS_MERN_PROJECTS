import {useState,useEffect} from "react";
import NavBar from "./NavBar";
import app from "./Firebase";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom";

function Login()
{
	const nav = useNavigate();
	const [ans,setAns] = useState("");
	useEffect( () => {
		let un = localStorage.getItem("un");
		if(un != null)
		{
			nav("/");
		}
	},[])
	const [email,setEmail] = useState("");
	const [p,setP] = useState("");
	
	const hEmail = (event) => {setEmail(event.target.value);}
	const hP = (event) => {setP(event.target.value);}
	
	const save = (event) => {
		event.preventDefault();
		const auth = getAuth();
		signInWithEmailAndPassword(auth,email,p)
		.then(res =>{
			nav("/");
			localStorage.setItem("un",email);
		})
		.catch(err => setAns("Issue "+err));
	}

	return(
	<>
	<center>
	<NavBar/>
	<h1>Login Page</h1>
	<form onSubmit={save}>
	<input type="email" placeholder="Enter Email"
	onChange={hEmail} value={email}/>
	<br/><br/>
	<input type="password" placeholder="Enter Password"
	onChange={hP} value={p}/>
	<br/><br/>
	<input type="submit" value="Login"/>
	</form>
	<h2>{ans}</h2>
	</center>
	</>
	);
}
export default Login;