import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';
import firebase from "firebase/compat/app";
import {useState,useRef} from "react";
import {set,ref} from "firebase/database";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB_PwvFQB6m1gO-U4D6DqApdIYuMGctOyk",
  authDomain: "enquiryapp-64af1.firebaseapp.com",
  projectId: "enquiryapp-64af1",
  storageBucket: "enquiryapp-64af1.appspot.com",
  messagingSenderId: "433932272938",
  appId: "1:433932272938:web:fc081f2ef871897f554a53"
};

const app =firebase.initializeApp(firebaseConfig);
const db = getDatabase(app);

function Enquiry()
{
	const [name,setName] = useState("");
	const [query,setQuery] = useState("");
	const [phone,setPhone] = useState("");
	const [otp,setOtp] = useState("");
	const [final,setFinal] = useState("");
	const rName = useRef();

	const hName = (event) => {setName(event.target.value);}
	const hQuery = (event) => {setQuery(event.target.value);}
	const hPhone = (event) => {setPhone(event.target.value);}
	const hOtp = (event) => {setOtp(event.target.value);}
	const hFinal = (event) => {setFinal(event.target.value);}

	const configureCaptcha = () => {
		window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
			'size' : 'invisible',
			'callback': (response) => {
				sendOtp();
				console.log("Recaptcha Verified")
			},
			defaultCountry: "IN"
		});
	}

	const sendOtp = (event) => {
		event.preventDefault();
		configureCaptcha();
		let pn = "+91" + phone;
		let av = window.recaptchaVerifier;
		firebase.auth().signInWithPhoneNumber(pn,av)
		.then(res => {
			setFinal(res);
			console.log(res);
			console.log("OTP sent");
			alert("OTP sent");
		})
		.catch(err => {
			console.log(err);
		})
	}

	const submitOtp = (event) => {
		event.preventDefault();
		final.confirm(otp)
		.then(res => {
			const d = new Date().toString();
			const n = name + "--> " + d;
			const data = {name,phone,query,d}
			set(ref(db,"visitors/" +n),data)
			.then(res => {
				console.log(res);
				alert("We will get Back to u in 2 hrs")
				window.location.reload()
			})
			.catch(err => console.log(err))
		})
		.catch(err => {
			console.log(err);
			alert("Invalid OTP!");
			window.location.reload()
		})
	}
	return(
	<>
	<center>
	<h1>Enquiry Form</h1>
	<form onSubmit={sendOtp}>
	<input type="name" placeholder="Enter Your Name"
	onChange={hName} value={name} ref={rName}/>
	<br/><br/>
	<textarea placeholder="Enter ur Query" rows={3} cols={20}
	onChange={hQuery} value={query} ></textarea>
	<br/><br/>
	<input type="number" placeholder="Enter Your Phone No"
	onChange={hPhone} value={phone} />
	<br/><br/>
	<input type="submit" value="Generate OTP"/>
	<br/><br/>
	</form>
	<form onSubmit={submitOtp}>
	<div id="sign-in-button"></div>
	<input type="number" placeholder="Enter OTP"
	onChange={hOtp} value={otp} />
	<br/><br/>
	<input type="submit" value="Submit OTP"/>
	<br/><br/>
	</form>
	</center>
	</>
	);
}
export default Enquiry;