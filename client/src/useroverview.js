import UserHeader from './components/userheader';
import UserName from './components/username';
import ContactHeader from './components/contact-header';
import CiBoxes from './components/ci-boxes';
import BottomNavBar from './components/bottomnavbar'

function UserOverview() {
    return (
        <div>

        <UserHeader />
        <UserName />
        <ContactHeader />
        <CiBoxes />
        <BottomNavBar />

        
        </div>

    );
  }
  
  export default UserOverview;