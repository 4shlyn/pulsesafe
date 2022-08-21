import './usm.css';
import './usm.css';
import RedLine from '../svgs/redline.svg';
import Rightarrow from '../svgs/rightarrow.svg';
const CiBoxes = () => {
    return ( 
    <div>
        <div className="lgrey">
            <div className="sqr-icon"></div>
        <div id="emailtext">
            example@gmail.com
        </div>
        </div>
        <div className="llight">
            <div className="sqr-icon2"></div>
            <div id="phonetext">(416)-123-4567</div> {/* to be overwritten */}
        </div>
    <div className="contact-info">
        <div>
        Status
        </div>
        <img id="statReAlign" src={RedLine} alt="redline" />
    </div>
    <div className="lgrey">
        <div id="fitbit-connect-stat">
        No Fitbit connected.
        </div>
        <img id="rightarrow" src={Rightarrow} alt="rightarrow" />
    </div>
    <div id="editcontain">
        <div>
        No current nearby alerts.
        </div>
    </div>
    </div>
     );
}
 
export default CiBoxes;