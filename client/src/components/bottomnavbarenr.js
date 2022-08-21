import './usm.css';
import Greysepline from '../svgs/greysepline.svg';
import UserProfile from '../svgs/userprofile.svg';
import LocationLogo from '../svgs/location.svg';
import CheckMark from '../svgs/checkmark.svg';
const BottomNavBar = () => {
    return ( 
    <div id="barcontainer2">
    <img className="greylinesep" src={Greysepline} alt="separator" />
    <div className="container-nav-bot">
        <img src={UserProfile} alt="Profile Logo" />
        <img src={LocationLogo} alt="Location Logo" />
        <img src={CheckMark} alt="Check Mark"/>

    </div>
    </div>
     );
}
 
export default BottomNavBar;