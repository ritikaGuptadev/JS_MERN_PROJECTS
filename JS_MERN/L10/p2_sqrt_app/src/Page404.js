import {useNavigate, Link} from "react-router-dom";
import {useEffect} from "react";
function Page404()
{
	const nav = useNavigate();
	const gh = () => {nav("/");}

	useEffect( () => {
		setInterval(gh, 5000);
	},[]);
	return(
	<>
	<center>
		<h1>Page Not Found</h1>
		<Link to="/">Home</Link>
	</center>
	</>
	);
}
export default Page404;