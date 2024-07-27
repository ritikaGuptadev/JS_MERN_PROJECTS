import logo from './logo.svg';
import './App.css';
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";
import ABout from "./ABout";
import Firebase from "./Firebase";
import ForgotPassword from "./ForgotPassword";
import ChangePassword from "./ChangePassword";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
	<>
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home/>} />
			<Route path="/login" element={<Login/>} />
			<Route path="/about" element={<ABout/>} />
			<Route path="/signUp" element={<SignUp/>} />
			<Route path="*" element={<Home/>} />
			<Route path="/fp" element={<ForgotPassword/>}/>
			<Route path="/cp" element={<ChangePassword/>}/>
		</Routes>
	</BrowserRouter>	
	</>
  );
}

export default App;
