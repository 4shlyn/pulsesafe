import SigninForm from './components/signinform';
import LoginHeader from './components/loginheader';
import NoAcc from './components/donthaveacc';
import Logo from './svgs/logo.svg';
import './components/login.css'
import Leftline from './svgs/leftline.svg'

function LoginPage() {
    return (
      <div className="LoginPage">
        <img className="logo-login" src={Logo} alt="PulseSafe Logo" />
        <LoginHeader />
        <img className="left-line" src={Leftline} alt="--" />
        <SigninForm />
        <NoAcc />
  
      </div>
    );
  }
  
  export default LoginPage;