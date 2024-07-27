import {useState,useEffect} from "react";
import NavBar from "./NavBar";
import app from "./Firebase";
import {getAuth,updatePassword, onAuthStateChanged} from "firebase/auth";
import {useNavigate} from "react-router-dom";

function ChangePassword()
{	
	const nav = useNavigate();
	useEffect ( () => {
		let un = localStorage.getItem("un");
		if(un == null)
			nav("/login");
	},[]);
	const [p1,setP1] = useState("");
	const [p2,setP2] = useState("");
	const [ans,setAns] = useState("");

	const hP1 = (event) => {setP1(event.target.value);}
	const hP2 = (event) => {setP2(event.target.value);}

	const save = (event) => {
		event.preventDefault();
		if(p1 == p2)
		{
			const auth = getAuth();
			onAuthStateChanged(auth, (user) => {
				updatePassword(user,p1)
				.then(res => {
					localStorage.clear();
					nav("/login");
				})
				.catch(err => setAns("issue "+ err));
			})
		}
		else
		{
			setAns("passwords did not match");
		}
	}
	return(
	<>
	<center>
	<NavBar/>
	<h1>Change Password</h1>
	<form onSubmit={save}>
	<input type="password" placeholder="New Password"
	onChange={hP1} value={p1}/>
	<br/><br/>
	<input type="password" placeholder="Confirm Password"
	onChange={hP2} value={p2}/>
	<br/><br/>
	<input type="submit" value="Change"/>
	</form>
	<h2>{ans}</h2>
	</center>
	</>
	);
}
export default ChangePassword;