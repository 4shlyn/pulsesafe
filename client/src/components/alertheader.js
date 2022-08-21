import './usm.css';
import Redbox from '../svgs/redbox.svg';
const AlertHeader = () => {
    return ( 
    <div className="contact-info">
        <div>
        Alerter Info
        </div>
        <img id="alertboxthing" src={Redbox} alt="redline" />
    </div>
     );
}
 
export default AlertHeader;