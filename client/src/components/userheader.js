import './usm.css'
import Questionmark from '../svgs/question.svg'
import RightLine from '../svgs/rightline.svg'
const UserHeader = () => {
    return ( 
    <div>
     <div className="user-header-nl"> 
    <div className="header-boiler">
        User Overview
    </div> 
    <img className="questionmark" src={Questionmark} alt="faq" />
    </div>  

    <img className="right-line" src={RightLine} alt="--" />

    </div>     
      
    );
    

}
 
export default UserHeader;