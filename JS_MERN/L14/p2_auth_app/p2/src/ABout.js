import {useState,useEffect} from "react";
import NavBar from "./NavBar";
import {useNavigate} from "react-router-dom";

function ABout()
{
	let nav = useNavigate();
	useEffect( () => {
		let un = localStorage.getItem("un");
		if(un == null)
		{
			nav("/login");
		}
	},[]);
	
	return(
	<>
	<center>
	<NavBar/>
	<h1>About Page</h1>
	</center>
	</>
	);
}
export default ABout;