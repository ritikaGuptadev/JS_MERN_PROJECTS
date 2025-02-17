import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import Aboutus from "./Aboutus";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
	<BrowserRouter>
		<Routes>
			<Route path="/" element={ <Home/>} />
			<Route path="/Aboutus" element = { <Aboutus/>} />
			<Route path="*" element = { <Home/>} />
		</Routes>
	</BrowserRouter>
    </>
  );
}

export default App;
