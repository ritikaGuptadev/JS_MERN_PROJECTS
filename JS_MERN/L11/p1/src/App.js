import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import Java from "./Java";
import Python from "./Python";
import Js from "./Js";
import Enquiry from "./Enquiry";
import Navbar from "./Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
	<Navbar/>
	<Routes>
		<Route path="/" element={<Home/>} />
		<Route path="/java" element={ <Java/>} />
		<Route path="/python" element={<Python/>} />
		<Route path="/js" element={ <Js/>} />
		<Route path="/enquiry" element={<Enquiry/>} />
		
	</Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
