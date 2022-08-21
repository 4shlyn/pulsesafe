import './usm.css';
import RedLine from '../svgs/redline.svg';
const ContactHeader = () => {
    return ( 
    <div className="contact-info">
        <div>
        Contact Info
        </div>
        <img src={RedLine} alt="redline" />
    </div>
     );
}
 
export default ContactHeader;