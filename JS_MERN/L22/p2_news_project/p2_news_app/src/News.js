import {useState} from "react";
import axios from "axios";
import Result from "./Result";

export default function News()
{
	const [info,setInfo] = useState([]);
	const hInfo = (event) => {setInfo(event.target.value);}

	const gn = (event) => {
		event.preventDefault();
		let a1= "https://newsapi.org/v2/top-headlines";
		let a2="?country=" + "in";
		let a3="&apiKey=" + "b810fce5155942f8a4f68c2f80a71a5c";
		let url = a1+a2+a3;
		axios.get(url)
		.then(res => setInfo(res.data.articles))
		.catch(err => setInfo("Issue "+err));
	}
	return(
	<>
	<center>
		<h1>India Ki Khabar</h1>
		<form onSubmit={gn}>
			<input type="submit" values="Get News"/>
		</form>
		{
			info.map((e) => (
			<div>
				<Result title={e.title} urlToImage={e.urlToImage} url={e.url}/>
			</div>
			))
		}
	</center>
	</>
	);
}