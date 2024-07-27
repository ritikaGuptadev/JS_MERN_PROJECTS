import {Link} from "react-router-dom";

function Navbar()
{
	return(
	<>
	<center>
	<div className ="nav">
	<Link to="/" >Home</Link>
	<Link to="/java">Java</Link>
	<Link to="/python" >Python</Link>
	<Link to="/js" >JsMERN</Link>
	<Link to="/enquiry" >Enquiry</Link>
	</div>
	</center>
	</>
	);
}
export default Navbar;