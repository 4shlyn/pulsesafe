import SignupForm from './components/signupform';
import CreateHeader from './components/createheader';
import Logo from './svgs/logo.svg';
import './components/login.css';
import Leftline from './svgs/leftline.svg';
import LeftArrow from './svgs/leftarrow.svg';


function SignupPage() {
    return (
      <div className="SignupPage">
        <div className="headerthing-signup">
        <img className="left-arrow" src={LeftArrow} alt="Left Arrow" />
        <img className="logo-login" src={Logo} alt="PulseSafe Logo" />
        </div>
        <CreateHeader />
        <img className="left-line" src={Leftline} alt="--" />
        <SignupForm />
  
      </div>
    );
  }
  
  

  export default SignupPage;