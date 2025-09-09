import styles from './TravelJourney.module.css'
import Map from "../../components/Map/Map";
import SideBar from "../../components/SideBar/SideBar";

function TravelJourney() {
  return (
    <main className={styles.app}>
      <SideBar />
      <Map />
    </main>
  );
}

export default TravelJourney;
