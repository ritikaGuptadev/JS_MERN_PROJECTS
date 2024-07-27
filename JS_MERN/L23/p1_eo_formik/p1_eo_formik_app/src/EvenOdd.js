import {useFormik} from "formik";

export default function EvenOdd()
{
	const initialValues = {"num": ""};

	const validate = (values) => {
		const errors = {};
		if(values.num == "")
		{
			errors.num = "input is empty";
		}
		return errors;
	}
	const onSubmit = (values) => {
		let n = parseInt(values.num);
		let r = n % 2 == 0 ? "even" : "odd";
		alert(r);
	}
	const formik = useFormik({initialValues, validate, onSubmit});
	return(
	<>
	<center>
	<h1>Even Odd App Using Formik</h1>
	<form onSubmit = {formik.handleSubmit}>
		<input type="number" placeholder="Enter Number" name="num"
		onChange = {formik.handleChange}/>
		{ formik.errors.num ? <div className="err">{formik.errors.num}</div>:null}
		<br/><br/>
		<input type="submit" value="Find Even/Odd"/>
	</form>
	</center>
	</>
	);
}