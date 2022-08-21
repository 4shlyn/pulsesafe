import './usm.css';
import Kevin from '../svgs/kev.svg'
const UserName = () => {
    return ( 
    <div className="user-name-start">
        <img className="pfp" src={Kevin} alt="pfp" />
        <div className='user-full-name'>John Doe</div>          {/* to be overwritten */}




    </div>
     );
}
 
export default UserName;