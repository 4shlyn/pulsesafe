import './login.css';
const SigninForm = () => {
    return ( 
        <form>
        <div className='input-login'>
            <input type="email" placeholder="Email" required></input>
        </div>
        <div className='input-login'>
            <input type="password" placeholder="Password" required></input>
        </div>
        <div className="SigninButton">
            <input type="submit" value="Sign in" ></input>
        </div>
        </form>
     );
}
 
export default SigninForm;