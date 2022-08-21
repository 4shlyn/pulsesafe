import React from 'react';
import './usm.css';
import './usm.css';
import RedLine from '../svgs/redline.svg';
import Rightarrow from '../svgs/rightarrow.svg';
const CiBoxes = () => {
    function refreshPage() {
        window.location.reload(false);
    }

    const [data, setData] = React.useState(null);
    fetch('http://localhost:3001/api', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then((res) => res.json()).then((data) => setData(data.message))


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
                    {!data ? "Loading..." : data}
                </div>
            </div>
            <div>
                <button onClick={refreshPage}>Refresh</button>
            </div>
        </div>
    );
}

export default CiBoxes;