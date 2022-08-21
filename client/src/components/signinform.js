import React from 'react';
import './login.css';
const SigninForm = () => {
    const [email,setEmail] = React.useState(""); 
    const [password,setPassword] = React.useState(""); 
    const rawResponse = () => {
        console.log('Making a request');
        fetch('http://localhost:3001/post/login', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email: email, password: password}),
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
        <div className='input-login'>
            <input type="email" placeholder="Email" required onChange = {(e) => setEmail(e.target.value)}></input>
        </div>
        <div className='input-login'>
            <input type="password" placeholder="Password" required onChange = {(e) => setPassword(e.target.value)}></input>
        </div>
        <div className="SigninButton">
            <button type="submit" value="Sign in" onClick = {rawResponse}>Sign In</button>
        </div>
        </div>
     );
}
 
export default SigninForm;
