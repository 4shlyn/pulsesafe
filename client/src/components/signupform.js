import './signup.css';
const SignupForm = () => {
    return ( 
        <form>
        <div className='input-signup'>
            <input type="text" placeholder="Full Name" id="name" required></input>
        </div>
        <div className='input-signup'>
            <input type="email" placeholder="Email" id="mail" required></input>
        </div>
        <div className='input-signup'>
            <input type="password" placeholder="Password" id="pass" required></input>
        </div>
        <div className='pass-confirm'>
            <input type="password" placeholder="Confirm Password" id="pass2" required></input>
        </div>
        <div className="ctc-parent">
            <input className="checkbox-tc" type="checkbox" id="check"></input>
            <div>I agree to the <a href="">Terms and Conditions</a></div>
        </div>
        <div className="SignUpButton">
            <input type="submit" value="Sign up" id="sign"></input>
        </div>
        </form>
     );
}

export default SignupForm;
