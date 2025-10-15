import { useSearchParams } from "react-router";
import styles from "./Map.module.css";

function Map() {
  const [searchParam, setSearchParam] = useSearchParams()
  const [lat, lng] = [searchParam.get("lat"), searchParam.get("lng")]
  return <section className={styles.map}>
    <p>
      Latitude: {lat}
    </p>
    <p>
    Langtitude: {lng}
    </p>
  </section>;
}

export default Map;
