import {Link} from "react-router-dom";

function Navbar()
{
	return(
	<>
	<center>
		<div className="nav">
		<Link to="/">Home</Link>
		<Link to="/create">Create</Link>
		</div>
	</center>
	</>
	);
}
export default Navbar;