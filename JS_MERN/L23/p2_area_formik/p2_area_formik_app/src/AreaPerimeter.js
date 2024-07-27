import {useFormik} from "formik";

export default function AreaPerimeter()
{
	const initialValues = {"length": "", "breadth": "", "ans": ""};

	const validate = (values) => {
		const errors = {};
		if(values.length == "")
		{
			errors.length = "length is empty";
		}
		if(parseFloat(values.length) < 0)
			errors.length = "length is negative";

		if(values.breadth == "")
		{
			errors.breadth = "breadth is empty";
		}
		if(parseFloat(values.breadth) < 0)
			errors.breadth = "breadth is negative";

		return errors;
	}
	const onSubmit = (values) => {
		let le = parseFloat(values.length);
		let br = parseFloat(values.breadth);
		let area = le * br;
		let peri = 2 * (le+br);
		let msg = "area=" +area.toFixed(2)+ " peri="+peri.toFixed(2);
		formik.setValues({ans: msg});
	}
	const formik = useFormik({initialValues, validate, onSubmit});
	return(
	<>
	<center>
	<h1>Area Perimeter Using Formik</h1>
	<form onSubmit = {formik.handleSubmit}>
		<input type="number" step="any" placeholder="Enter Length" name="length"
		onChange = {formik.handleChange}/>
		{ formik.errors.length ? <div className="err">{formik.errors.length}</div>:null}
		<br/><br/>
		<input type="number" step="any" placeholder="Enter Breadth" name="breadth"
		onChange = {formik.handleChange}/>
		{ formik.errors.breadth ? <div className="err">{formik.errors.breadth}</div>:null}
		<br/><br/>
		<input type="submit" value="Find Area & Perimeter"/>
	</form>
	<h2>{formik.values.ans}</h2>
	</center>
	</>
	);
}