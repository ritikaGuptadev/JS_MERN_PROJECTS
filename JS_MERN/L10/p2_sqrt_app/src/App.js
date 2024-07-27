import logo from './logo.svg';
import './App.css';
import Sqrt from "./Sqrt";
import Result from "./Result";
import Page404 from "./Page404";
import {BrowserRouter , Routes, Route} from "react-router-dom";

function App() {
  return (
	<>
	<BrowserRouter>
		<Routes>
			<Route path="/" element={ <Sqrt/>} />
			<Route path="/result" element={ <Result/>} />
			<Route path="*" element= { <Page404/> } />
		</Routes>
	</BrowserRouter>
	</>
  );
}

export default App;
