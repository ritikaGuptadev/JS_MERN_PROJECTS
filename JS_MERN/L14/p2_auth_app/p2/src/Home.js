import {useState,useEffect} from "react";
import NavBar from "./NavBar";
import {useNavigate} from "react-router-dom";
function Home()
{
	const nav = useNavigate();
	const [ans,setAns] = useState("");

	useEffect( () => {
		let un = localStorage.getItem("un");
		if(un == null)
		{
			nav("/login");
		}
		else
		{
			setAns("Welcome "+un);
		}
	},[]);
	
	const hAns = (event) => {setAns(event.target.value);}
	
	const save = (event) => {
		event.preventDefault();
		localStorage.clear();
		nav("/login");
	}
	return(
	<>
	<center>
	<NavBar/>
	<form onSubmit={save}>
	<h1>Home Page</h1>
	<input type="submit" value="Logout"/>
	</form>
	<h2>{ans}</h2>
	</center>
	</>
	);
}
export default Home;