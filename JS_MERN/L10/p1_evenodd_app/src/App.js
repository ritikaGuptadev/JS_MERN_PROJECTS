import logo from './logo.svg';
import './App.css';
import EvenOdd from "./EvenOdd";
import Result from "./Result";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    	<>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={ <EvenOdd/>} />
				<Route path="/result" element={ <Result/>} />
			</Routes>
		</BrowserRouter>
	</>
  );
}

export default App;
