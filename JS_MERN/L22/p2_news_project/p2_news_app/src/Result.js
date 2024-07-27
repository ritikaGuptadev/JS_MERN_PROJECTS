export default function Result(props)
{
	return(
	<>
	<center>
		<h2>{props.title}</h2>
		<img src={props.urlToImage} />
		<br/><br/>
		<a href={props.url}>Read More</a>
		<hr/>
	</center>
	</>
	);
}