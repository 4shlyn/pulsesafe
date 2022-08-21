import MapHeader from "./components/mapheader";
import BottomNavBar from "./components/bottomnavbar";
import AlerterInfo from "./components/alerterinfo";
import GoogleMap from "./components/googlemap";
import AlertHeader from "./components/alertheader";
function MapPage() {
    return (
      <div>
        <MapHeader />
        <AlertHeader />
        <AlerterInfo />
        <GoogleMap />
        <BottomNavBar />
      </div>
    );
  }
