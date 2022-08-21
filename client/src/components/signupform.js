import './signup.css';
import React from 'react';
const SignupForm = () => {
    const [name,setName] = React.useState("");
    const [email,setEmail] = React.useState(""); 
    const [password,setPassword] = React.useState(""); 
    const rawResponse = () => {
        console.log('Making a request');
        fetch('http://localhost:3001/post/signup', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: name, email: email, password: password}),
        })
          .then((res) =>
            res
              .json()
              .then((data) => {
                console.log('Got the response = ', data);
              })
              .catch((error) =>
                console.log('Error occured while parsing json = ', error.message)
              )
          )
          .catch((error) => {
            console.log('Error while trying to make request: ', error.message);
          });
      };

    return ( 
        <div>
        <div className='input-signup'>
            <input type="text" placeholder="Full Name" id="name" required onChange = {(e) => setName(e.target.value)}></input>
        </div>
        <div className='input-signup'>
            <input type="email" placeholder="Email" id="mail" required onChange = {(e) => setEmail(e.target.value)}></input>
        </div>
        <div className='input-signup'>
            <input type="password" placeholder="Password" id="pass" required onChange = {(e) => setPassword(e.target.value)}></input>
        </div>
        <div className='pass-confirm'>
            <input type="password" placeholder="Confirm Password" id="pass2" required></input>
        </div>
        <div className="ctc-parent">
            <input className="checkbox-tc" type="checkbox" id="check"></input>
            <div>I agree to the <a href="">Terms and Conditions</a></div>
        </div>
        <div className="SignUpButton">
            <button id="sign" onClick = {rawResponse}>Sign Up</button>
        </div>
        </div>
     );
}



 
export default SignupForm;
