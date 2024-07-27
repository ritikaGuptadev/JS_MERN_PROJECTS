import {Link} from "react-router-dom";

function NavBar()
{
	const un = localStorage.getItem("un");
	return(
	<>
	<div className="nav">
	{(un == null) && (<Link to="/login">Login</Link>)}
	{(un == null) && (<Link to="/signup">SignUp</Link>)}
	{(un == null) && (<Link to="/fp">ForgotPassword</Link>)}
	{(un != null) && (<Link to="/home">Home</Link>)}
	{(un != null) && (<Link to="/about">About</Link>)}
	{(un != null) && (<Link to="/cp">ChangePassword</Link>)}
	</div>
	</>
	);
}
export default NavBar;