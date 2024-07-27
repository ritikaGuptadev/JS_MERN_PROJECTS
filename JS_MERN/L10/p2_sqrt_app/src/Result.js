import {useLocation, Link} from "react-router-dom";

function Result()
{
	const loc = useLocation();
	return(
	<>
	<center>
		<h1>Result Page</h1>
		<h2>{loc.state != null ? loc.state.res : "Acting Smart ??"}</h2>
		<Link to="/">Home</Link>
	</center>
	</>
	);
}
export default Result;